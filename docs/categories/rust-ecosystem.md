# Rust Ecosystem

The backbone for a fast, safe, cross-platform core — mirroring OpenCut's move to a Rust engine.

## Core Language & Tooling

### [rust](https://github.com/rust-lang/rust) — ⭐ 115.4K

The Rust programming language and standard library.

**Why it matters:** The foundation of the whole ecosystem — performance and memory safety make it the right engine core.

**Tags:** `language` `compiler`

### [serde](https://github.com/serde-rs/serde) — ⭐ 10.8K

Serialization framework for Rust.

**Why it matters:** Universal (de)serialization for project files, editor state, and API payloads.

**Tags:** `serialization` `derive`

### [tokio](https://github.com/tokio-rs/tokio) — ⭐ 32.9K

Asynchronous runtime for Rust.

**Why it matters:** Async I/O for asset loading, MCP servers, background rendering jobs, and plugin communication.

**Tags:** `async` `runtime` `io`

## Cross-Platform Desktop Shell

### [Tauri](https://github.com/tauri-apps/tauri) — ⭐ 110K

Framework for building tiny, fast, secure cross-platform desktop apps with a web frontend and a Rust backend.

**Why it matters:** The strongest candidate for OpenCut Alt's desktop shell — one Rust core serving web, desktop, and mobile.

**Tags:** `desktop` `webview` `shell`

## Graphics & GPU

### [wgpu](https://github.com/gfx-rs/wgpu) — ⭐ 17.7K

Cross-platform, safe, native graphics library (WebGPU implementation in Rust).

**Why it matters:** GPU-accelerated rendering of previews, thumbnails, and effects across all target platforms.

**Tags:** `graphics` `webgpu` `gpu`

### [egui](https://github.com/emilk/egui) — ⭐ 30K

Immediate-mode GUI library for Rust.

**Why it matters:** Fast native UI for tools, inspectors, and debugging panels — a pragmatic UI fallback for the desktop core.

**Tags:** `gui` `immediate-mode` `egui`

### [vulkano](https://github.com/vulkano-rs/vulkano) — ⭐ 5.1K

Safe and rich Rust wrapper around the Vulkan graphics API.

**Why it matters:** Alternative low-level GPU path when you need maximum control over video processing pipelines.

**Tags:** `graphics` `vulkan` `gpu`

### [bevy](https://github.com/bevyengine/bevy) — ⭐ 47.5K

Refreshingly simple data-driven game engine built in Rust.

**Why it matters:** ECS architecture and modular plugin design are inspiring patterns for an editor's scene/effect system.

**Tags:** `engine` `ecs` `plugins`

## Media & Codecs (Rust)

### [rav1e](https://github.com/xiph/rav1e) — ⭐ 4.1K

Fast and safe AV1 encoder written in pure Rust.

**Why it matters:** A pure-Rust encoder — the model for shipping royalty-free encoding with no C dependencies.

**Tags:** `av1` `encoder` `video`

### [Symphonia](https://github.com/pdeljanov/Symphonia) — ⭐ 3.3K

Pure Rust audio decoding and media demuxing library (AAC, FLAC, MP4, MKV, OGG, WAV, WebM, and more).

**Why it matters:** Pure-Rust demuxing/decoding fits OpenCut Alt's "one codebase" story and v0.6 is adding video/subtitle groundwork.

**Tags:** `audio` `demuxer` `codecs`

### [rust-av](https://github.com/rust-av/rust-av) — ⭐ 911

Pure Rust multimedia framework with demuxing, decoding, encoding, and filtering.

**Why it matters:** The most complete pure-Rust multimedia framework to study — ambitious foundation for an in-Rust media stack.

**Tags:** `multimedia` `ffmpeg` `framework`

### [rust-ffmpeg](https://github.com/zmwangx/rust-ffmpeg) — ⭐ 2K

Safe FFmpeg wrapper (ffmpeg-next) for Rust.

**Why it matters:** The pragmatic path: a safe Rust API over FFmpeg today while pure-Rust options mature.

**Tags:** `ffmpeg` `binding` `safe`
