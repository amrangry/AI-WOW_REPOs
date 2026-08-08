import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const categoriesDir = join(__dirname, '..', 'docs', 'categories')

const token = process.env.GITHUB_TOKEN || ''
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'wow-repos-update-stars',
  ...(token ? { Authorization: `Bearer ${token}` } : {})
}

const compact = (n) =>
  new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n)

const ENTRY_RE = /^### \[.+?\]\(https:\/\/github\.com\/([\w.-]+\/[\w.-]+)\)\s*—\s*⭐\s*[\d.,kK]+$/

async function fetchStars(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}`, { headers })
  if (!res.ok) {
    if (res.status === 403 || res.status === 429) throw new Error('rate limited')
    throw new Error(`HTTP ${res.status}`)
  }
  const data = await res.json()
  return data.stargazers_count
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const dryRun = process.argv.includes('--dry-run')
let changed = false

for (const file of readdirSync(categoriesDir).filter((f) => f.endsWith('.md'))) {
  const path = join(categoriesDir, file)
  const lines = readFileSync(path, 'utf8').split('\n')
  const updated = []

  for (const line of lines) {
    const match = line.match(ENTRY_RE)
    if (!match) {
      updated.push(line)
      continue
    }
    const repo = match[1]
    try {
      const stars = await fetchStars(repo)
      const formatted = compact(stars)
      updated.push(line.replace(/—\s*⭐\s*[\d.,kK]+/, `— ⭐ ${formatted}`))
      console.log(`${file}: ${repo} -> ${formatted}`)
      if (line !== updated[updated.length - 1]) changed = true
      await sleep(300)
    } catch (err) {
      updated.push(line)
      console.error(`SKIP ${file}: ${repo} (${err.message})`)
    }
  }

  if (!dryRun) writeFileSync(path, updated.join('\n'))
}

if (dryRun) {
  console.log(changed ? '\n--dry-run: star counts would change.' : '\n--dry-run: all star counts are current.')
} else {
  console.log(changed ? '\nStar counts updated.' : '\nNo changes to star counts.')
}
