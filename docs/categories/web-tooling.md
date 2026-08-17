# Web Editor Tooling

Canvas, rendering, and motion libraries for building browser-based editors — the UI layer of OpenCut Alt.

## Canvas & Rendering

### [PixiJS](https://github.com/pixijs/pixijs) — ⭐ 48K

Fast, flexible 2D WebGL/WebGPU renderer for the web.

**Why it matters:** High-performance 2D rendering for timeline previews, thumbnails, and compositing layers.

**Tags:** `webgl` `webgpu` `2d` `renderer`

### [Three.js](https://github.com/mrdoob/three.js) — ⭐ 114.6K

JavaScript 3D library for WebGL.

**Why it matters:** When OpenCut Alt needs 3D effects, transitions, or text rendering, three.js is the proven ecosystem.

**Tags:** `webgl` `3d` `renderer`

### [Konva](https://github.com/konvajs/konva) — ⭐ 14.7K

2D canvas library for desktop and mobile applications, ideal for interactive editors.

**Why it matters:** Scene-graph model + hit detection makes it a strong fit for interactive clip/track editors.

**Tags:** `canvas` `scene-graph` `interactive`

### [Fabric.js](https://github.com/fabricjs/fabric.js) — ⭐ 31.4K

JavaScript canvas library with an object model and full SVG parsing.

**Why it matters:** Object model for shapes/text overlays on the canvas — useful for titles and annotations.

**Tags:** `canvas` `objects` `svg`

### [Paper.js](https://github.com/paperjs/paper.js) — ⭐ 15.1K

Vector graphics scripting framework running on top of HTML5 Canvas.

**Why it matters:** Crisp vector rendering and path math for motion paths and vector-based effects.

**Tags:** `canvas` `vector` `geometry`

## Infinite Canvas & Design Tools

### [Excalidraw](https://github.com/excalidraw/excalidraw) — ⭐ 129.8K

Virtual whiteboard for sketching hand-drawn-like diagrams.

**Why it matters:** Reference for collaboration features (live sync, cursors) and buttery-smooth canvas UX.

**Tags:** `whiteboard` `collaboration` `canvas`

### [tldraw](https://github.com/tldraw/tldraw) — ⭐ 49.8K

Infinite-canvas editor SDK and the tldraw whiteboard app.

**Why it matters:** A production-grade, embeddable canvas SDK — inspiration for OpenCut Alt's canvas editor shell and tooling.

**Tags:** `canvas` `editor` `sdk`

## Motion & Animation

### [Motion Canvas](https://github.com/motion-canvas/motion-canvas) — ⭐ 19K

Programmatic, typed, and interactive animation library for videos.

**Why it matters:** Timeline-based animation primitives that map directly onto OpenCut Alt's keyframe and tween systems.

**Tags:** `animation` `timeline` `typescript`

## Image & Media Processing

### [Sharp](https://github.com/lovell/sharp) — ⭐ 32.6K

High-performance Node.js image processing (libvips).

**Why it matters:** Fast server-side thumbnail and image pipeline for import processing and previews.

**Tags:** `image` `libvips` `processing`

## Browser Media APIs

### [WebCodecs](https://github.com/w3c/webcodecs) — ⭐ 1.3K

W3C specification for low-level encoding and decoding of audio and video in the browser.

**Why it matters:** The browser-native path to hardware-accelerated decode/encode — the spec behind client-side editing without WASM.

**Tags:** `spec` `webcodecs` `browser`
