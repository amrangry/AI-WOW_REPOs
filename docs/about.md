# About & How to Use

## What is WOW-Repos?

**WOW-Repos** is a curated warehouse of awesome repositories. Instead of starring a hundred repos and losing track of them, this project keeps a living, searchable index — organized by category, annotated with *why each repo matters*, and enriched with live star counts.

The primary consumer is **OpenCut Alt**, our project to build an open-source, cross-platform alternative to CapCut (web, desktop, and mobile from one codebase). Every entry here is reference material: something to read, copy patterns from, or wire into the build.

## How to use the warehouse

1. **Browse by category** from the sidebar — each page groups related repos into subcategories.
2. **Every entry** links to the upstream repo and explains why it matters for OpenCut Alt.
3. **Use search** (top of the page) to find repos by keyword.
4. **Star counts are live-ish** — a scheduled GitHub Action refreshes them weekly.

## The OpenCut Alt blueprint

OpenCut Alt draws inspiration from [OpenCut](https://github.com/OpenCut-app/OpenCut) — currently being rewritten from the ground up with a Rust core, an Editor API, plugin-first architecture, an MCP server, and headless mode. The warehouse maps onto that plan:

| Pillar | Where to look |
| --- | --- |
| Editor core / timeline | [Video Editors & Timelines](/categories/video-editors) |
| Media handling, codecs, playback | [Media & AV Libraries](/categories/media-av) |
| Native cross-platform core (Rust) | [Rust Ecosystem](/categories/rust-ecosystem) |
| Web editor UI (canvas, motion) | [Web Editor Tooling](/categories/web-tooling) |
| AI features, MCP, agent tooling | [AI & Agent Tooling](/categories/ai-agents) |
| Discovering more | [Awesome Lists & Meta](/categories/awesome-lists) |

## Contributing

Every entry follows the same shape:

```markdown
### [Repo Name](https://github.com/owner/repo) — ⭐ 12.3K

One-line description of what it does.

**Why it matters:** how this informs OpenCut Alt.

**Tags:** `tag1` `tag2`
```

- Keep entries in a subcategory heading (`## Subcategory`).
- Never edit the `⭐` number by hand — run `npm run update:stars` (or let the bot do it).
- Add it to the right category page; if it doesn't fit, propose a new category.

```bash
npm install
npm run update:stars        # refresh star counts in category pages
npm run docs:dev            # local preview at http://localhost:5173
npm run docs:build          # production build
```

## Deployment

The site is auto-built and deployed to **GitHub Pages** from the `main` branch. A weekly scheduled workflow also refreshes star counts and pushes the update, which triggers a redeploy. Enable `Settings → Pages → Source: GitHub Actions` on the repo.

The live site is at <https://amrangry.github.io/AI-WOW_REPOs/>.
