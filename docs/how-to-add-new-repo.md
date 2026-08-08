# How to Add a New Repo

Adding a repository to the warehouse is just editing a Markdown file and pushing — the site rebuilds and redeploys automatically.

## Quick steps

1. Open the category page you want to edit, e.g. `docs/categories/ai-agents.md`.
2. Add your entry (or edit an existing one) using the format below.
3. Preview locally (optional): `npm run docs:dev`
4. Commit and push — the GitHub Action redeploys in ~2 minutes.

## Where things live

| What | File |
| --- | --- |
| Category pages (the actual lists) | `docs/categories/*.md` |
| Home page | `docs/index.md` |
| About page | `docs/about.md` |
| This guide | `docs/how-to-add-new-repo.md` |
| Nav / sidebar / site theme | `docs/.vitepress/config.mts` |

## Entry format

Every entry follows the same shape:

```markdown
### [Repo Name](https://github.com/owner/repo) — ⭐ 12.3K

One-line description of what it does.

**Why it matters:** how this informs OpenCut Alt.

**Tags:** `tag1` `tag2`
```

### Rules of thumb

- Keep entries under a `## Subcategory` heading; group them logically.
- Add a new `## Subcategory` heading if an existing one doesn't fit.
- Always include **Why it matters** — it's what makes the warehouse a reference, not just a bookmark list.
- **Never hand-edit the `⭐` number.** It is refreshed automatically by `npm run update:stars` (or the weekly bot). If you hand-edit it, the next refresh will overwrite it anyway.
- Use the repo's exact GitHub URL.

## Star counts

Refresh them yourself:

```bash
npm run update:stars        # fetches live counts and rewrites the ⭐ values
npm run update:stars -- --dry-run   # preview changes without writing
```

The weekly GitHub Action does this on a schedule and auto-commits, which then triggers a redeploy.

## Adding a brand-new category

1. Create `docs/categories/<name>.md` with your entries.
2. Register it in the nav and sidebar in `docs/.vitepress/config.mts`:

```ts
{ text: 'My New Category', link: '/categories/<name>' }
```

3. Optionally add a matching feature card to `docs/index.md`.

## Publishing

```bash
git add -A
git commit -m "add: <repo name>"
git push
```

That's it — the live site updates automatically.
