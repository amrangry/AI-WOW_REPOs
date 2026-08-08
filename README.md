# WOW-Repos

> A curated warehouse of awesome repositories — the reference library for building **OpenCut Alt**, an open-source, cross-platform alternative to CapCut.

This repository keeps a living, searchable index of awesome repos: organized by category, annotated with *why each repo matters*, and enriched with live star counts (refreshed automatically every week).

## 🌐 Live site

<https://amrangry.github.io/AI-WOW_REPOs/>

## 📚 Browse the warehouse

The site is built with [VitePress](https://vitepress.dev/) and deployed to GitHub Pages.

| Category | What's inside |
| --- | --- |
| [Video Editors & Timelines](docs/categories/video-editors.md) | NLEs, timeline engines, and editing tools |
| [Media & AV Libraries](docs/categories/media-av.md) | Codecs, demuxers, players, transcoding |
| [Rust Ecosystem](docs/categories/rust-ecosystem.md) | Tauri, wgpu, egui, Symphonia, rav1e… |
| [Web Editor Tooling](docs/categories/web-tooling.md) | Canvas, rendering, motion libraries |
| [AI & Agent Tooling](docs/categories/ai-agents.md) | Agent frameworks, MCP, NVIDIA SkillSpector… |
| [Awesome Lists & Meta](docs/categories/awesome-lists.md) | Indexes of indexes |

## 🚀 Quick start

```bash
npm install
npm run docs:dev        # local preview at http://localhost:5173
npm run docs:build      # production build
npm run update:stars    # refresh star counts in category pages
```

## 🧱 Entry format

Every entry follows the same shape (and never edit the `⭐` number by hand — run `npm run update:stars`):

```markdown
### [Repo Name](https://github.com/owner/repo) — ⭐ 12.3K

One-line description of what it does.

**Why it matters:** how this informs OpenCut Alt.

**Tags:** `tag1` `tag2`
```

See [About & How to Use](docs/about.md) for the full contribution guide.

## 🤖 Automation

- **Star refresh:** a weekly scheduled [GitHub Action](.github/workflows/docs.yml) reads each entry's repo slug from the markdown, queries the GitHub API, and commits updated counts.
- **Deploy:** every push to `main` builds the docs and deploys to GitHub Pages. Enable `Settings → Pages → Source: GitHub Actions` after creating the repo.

## 📄 License

MIT
