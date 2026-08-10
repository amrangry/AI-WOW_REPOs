# Media & AV Libraries

Codecs, demuxers, players, and transcoding stacks. This is the multimedia plumbing OpenCut Alt builds on.

## Core Processing

### [FFmpeg](https://github.com/FFmpeg/FFmpeg) — ⭐ 63.1K

The de-facto standard for decoding, encoding, muxing, and filtering audio and video.

**Why it matters:** The backbone of any serious video editor — understanding its filter graph and demuxing pipeline is essential for OpenCut Alt.

**Tags:** `ffmpeg` `codecs` `transcoding`

### [codexffmpeg](https://github.com/GyanD/codexffmpeg) — ⭐ 2.4K

FFmpeg static builds for Windows (and helpers for other platforms).

**Why it matters:** Drop-in binaries for bundling FFmpeg with desktop builds without compiling from source.

**Tags:** `ffmpeg` `builds` `windows`

### [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) — ⭐ 17.7K

FFmpeg compiled to WebAssembly, running entirely in the browser.

**Why it matters:** Enables client-side transcoding and thumbnailing in the web editor without a backend.

**Tags:** `ffmpeg` `wasm` `browser` `webcodecs`

## Players & Playback

### [VLC](https://github.com/videolan/vlc) — ⭐ 19.3K

The legendary cross-platform media player and streaming engine (libVLC).

**Why it matters:** Reference for robust playback, subtitle handling, and format compatibility across every OS.

**Tags:** `player` `libvlc` `c++`

### [mpv](https://github.com/mpv-player/mpv) — ⭐ 36.5K

Minimalist, powerful, scriptable media player built on FFmpeg and libplacebo.

**Why it matters:** Excellent reference for renderer quality, GPU-backed scaling, and clean player architecture.

**Tags:** `player` `ffmpeg` `opengl` `libplacebo`

### [video.js](https://github.com/videojs/video.js) — ⭐ 39.8K

Open-source HTML5 video player framework.

**Why it matters:** Battle-tested web playback with plugin ecosystem — a model for the editor's preview player.

**Tags:** `player` `html5` `javascript`

### [hls.js](https://github.com/video-dev/hls.js) — ⭐ 16.9K

JavaScript HLS (HTTP Live Streaming) player.

**Why it matters:** Essential for smooth adaptive streaming preview when dealing with remote/large media.

**Tags:** `hls` `player` `streaming`

### [Shaka Player](https://github.com/shaka-project/shaka-player) — ⭐ 8.2K

JavaScript media player library supporting DASH and HLS.

**Why it matters:** Another robust playback reference with a strong focus on accessibility and DRM.

**Tags:** `player` `dash` `hls` `drm`

### [Vidstack](https://github.com/vidstack/vidstack) — ⭐ 3.6K

Modern media player components for the web (React, Svelte, Vue, and more).

**Why it matters:** Framework-agnostic, accessible media primitives that slot cleanly into a web editor UI.

**Tags:** `player` `components` `accessibility`

## Frameworks & Analysis

### [GStreamer](https://github.com/gstreamer/gstreamer) — ⭐ 3.3K

Open-source multimedia framework for building pipelines of media handling.

**Why it matters:** A full alternative to the FFmpeg model — pipeline-based graph thinking is directly useful for an editor's processing graph.

**Tags:** `framework` `pipeline` `codecs`

### [MediaInfo](https://github.com/MediaArea/MediaInfo) — ⭐ 2K

Convenient unified display of the most relevant technical and tag data for video and audio files.

**Why it matters:** The canonical way to inspect container/codec metadata — needed for import dialogs and clip properties.

**Tags:** `metadata` `analysis` `tools`

## Transcoding & Conversion

### [HandBrake](https://github.com/HandBrake/HandBrake) — ⭐ 24K

Tool for converting video from nearly any format to a selection of modern, widely supported codecs.

**Why it matters:** Reference for encode pipelines, presets, and quality analysis used in export dialogs.

**Tags:** `transcoding` `ffmpeg` `export`
