VitePress is fully themeable via CSS overrides. Main levers:

**1. Colors & fonts** — add a custom stylesheet and override VitePress CSS variables:

```
docs/.vitepress/theme/index.ts   -> import './custom.css'
docs/.vitepress/theme/custom.css -> define vars like --vp-c-brand-1, --vp-font-family-base...
```

**2. Built-in dark/light** — already included; users get a toggle. You can force one via `config.mts` (`appearance: false` or `'dark'`).

**3. Home page** — hero title/text/tagline, feature cards, and icons are all YAML in `docs/index.md`.

**4. Layout bits** — nav/sidebar/footer/outline all configurable in `docs/.vitepress/config.mts`.

**5. Full custom theme** — if you outgrow the default, you can replace it with your own Vue components.

Want me to change something specific? Tell me the vibe (brand color, fonts, dark-first, homepage layout) and I'll wire it up.