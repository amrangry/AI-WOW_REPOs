import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/AI-WOW_REPOs/'

export default defineConfig({
  lang: 'en-US',
  title: 'WOW-Repos',
  description:
    'A curated warehouse of awesome repositories — the reference library for building OpenCut Alt.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '⭐',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      {
        text: 'Categories',
        items: [
          { text: 'Video Editors & Timelines', link: '/categories/video-editors' },
          { text: 'Media & AV Libraries', link: '/categories/media-av' },
          { text: 'Rust Ecosystem', link: '/categories/rust-ecosystem' },
          { text: 'Web Editor Tooling', link: '/categories/web-tooling' },
          { text: 'AI & Agent Tooling', link: '/categories/ai-agents' },
          { text: 'Awesome Lists & Meta', link: '/categories/awesome-lists' }
        ]
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Warehouse',
          items: [
            { text: 'Home', link: '/' },
            { text: 'About & How to Use', link: '/about' }
          ]
        },
        {
          text: 'Categories',
          items: [
            { text: 'Video Editors & Timelines', link: '/categories/video-editors' },
            { text: 'Media & AV Libraries', link: '/categories/media-av' },
            { text: 'Rust Ecosystem', link: '/categories/rust-ecosystem' },
            { text: 'Web Editor Tooling', link: '/categories/web-tooling' },
            { text: 'AI & Agent Tooling', link: '/categories/ai-agents' },
            { text: 'Awesome Lists & Meta', link: '/categories/awesome-lists' }
          ]
        }
      ]
    },
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    lastUpdated: { text: 'Updated at', formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
    footer: {
      message: 'Curated reference warehouse for building OpenCut Alt.',
      copyright: 'MIT License'
    }
  }
})
