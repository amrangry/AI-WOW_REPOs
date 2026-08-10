# Video Editors & Timelines

Non-linear editors, timeline engines, and editing tools — the direct reference set for the core of OpenCut Alt.

## CapCut Alternatives & Full Editors

### [OpenCut](https://github.com/OpenCut-app/OpenCut) — ⭐ 82K

Open-source CapCut alternative for web, desktop, and mobile. Currently being rewritten from the ground up with a Rust core.

**Why it matters:** The primary blueprint for OpenCut Alt — Editor API, plugin-first architecture, MCP server, headless mode, and one codebase across platforms.

**Tags:** `editor` `rust` `video`

### [OpenCut Classic](https://github.com/opencut-app/opencut-classic) — ⭐ 213

The previous version of OpenCut — still what runs at opencut.app.

**Why it matters:** A working, shipped example of a browser-based video editor we can learn from while the rewrite matures.

**Tags:** `editor` `web` `video`

## Programmatic & React Video

### [Remotion](https://github.com/remotion-dev/remotion) — ⭐ 56K

Create videos programmatically using React and server-side rendering.

**Why it matters:** A reference for timeline concepts, frame-based rendering, and compositing pipelines that can inform OpenCut Alt's editor API.

**Tags:** `react` `video` `ssr` `render`

## Desktop NLE Reference Implementations

### [Shotcut](https://github.com/mltframework/shotcut) — ⭐ 14.9K

Free, open-source, cross-platform non-linear video editor built on the MLT framework.

**Why it matters:** Mature architecture for timeline editing, filters, and effects across desktop platforms.

**Tags:** `nle` `mlt` `ffmpeg` `desktop`

### [Flowblade](https://github.com/jliljebl/flowblade) — ⭐ 3.1K

Non-linear video editor for Linux with a modern, Python-based UI.

**Why it matters:** Compact codebase that's approachable to study — good for understanding the minimum feature set of a real editor.

**Tags:** `nle` `python` `gtk`

### [Kdenlive](https://github.com/KDE/kdenlive) — ⭐ 5.4K

KDE's non-linear video editor based on the MLT framework and KDE Frameworks.

**Why it matters:** Battle-tested timeline, clip handling, and proxy editing patterns. Note: primary development happens on KDE Invent; this is the official GitHub mirror.

**Tags:** `nle` `kde` `mlt` `timeline`

### [OpenShot](https://github.com/openshot/openshot-qt) — ⭐ 6.2K

Free, cross-platform video editor with a friendly Qt interface.

**Why it matters:** Example of a full production editor with animation, effects, and rendering layers you can trace end-to-end.

**Tags:** `nle` `qt` `python` `video`

## Fast & Lossless Editing

### [LosslessCut](https://github.com/mifi/lossless-cut) — ⭐ 42.8K

Cross-platform tool for lossless trimming, cutting, and merging of video and audio.

**Why it matters:** Demonstrates fast, keyframe-accurate cutting without re-encoding — a core UX pattern for any quick-edit feature.

**Tags:** `ffmpeg` `cut` `electron` `tools`

## Streaming & Recording

### [OBS Studio](https://github.com/obsproject/obs-studio) — ⭐ 74.8K

Free and open-source software for video recording and live streaming.

**Why it matters:** A huge reference for real-time capture, compositing scenes, audio mixing, and cross-platform C++ architecture.

**Tags:** `streaming` `recording` `c++` `obs`

## Compositing & VFX

### [Natron](https://github.com/NatronGitHub/Natron) — ⭐ 5.5K

Open-source, cross-platform node-based compositing application (Nuke alternative).

**Why it matters:** Node-graph architecture is a great model for OpenCut Alt's future plugin/effect system.

**Tags:** `compositing` `vfx` `nodes`

## Collaborative Canvas

### [Spacedeck Open](https://github.com/spacedeck/spacedeck-open) — ⭐ 1.1K

Open-source, real-time collaborative whiteboard web application.

**Why it matters:** Real-time sync and canvas rendering ideas transfer directly to collaborative editing and preview.

**Tags:** `whiteboard` `collaboration` `realtime` `canvas`
