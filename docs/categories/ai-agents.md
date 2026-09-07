# AI & Agent Tooling

Agent frameworks, MCP, local inference, and security tooling — the layer that makes OpenCut Alt smart, scriptable, and safe.

## Agent Skill Security

### [SkillSpector](https://github.com/NVIDIA/SkillSpector) — ⭐ 16.5K

NVIDIA's security scanner for AI agent skills — detects vulnerabilities, malicious patterns, and security risks before installing agent skills.

**Why it matters:** Before OpenCut Alt ships (or consumes) third-party agent skills and plugins, this is the tool to vet them.

**Tags:** `security` `agents` `scanning` `skills`

## Agent Frameworks

### [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) — ⭐ 29.2K

OpenAI's official Python SDK for building agentic AI applications.

**Why it matters:** A clean, modern agent model with handoffs and guardrails — a solid base for an in-editor AI assistant.

**Tags:** `agents` `openai` `sdk`

### [LangChain](https://github.com/langchain-ai/langchain) — ⭐ 145.8K

Framework for developing applications powered by language models.

**Why it matters:** Huge ecosystem of tools and integrations — useful when wiring many services into AI features.

**Tags:** `llm` `framework` `tools`

### [CrewAI](https://github.com/crewAIInc/crewAI) — ⭐ 58.2K

Framework for orchestrating role-playing, autonomous AI agents.

**Why it matters:** Role-based multi-agent patterns for automating editing workflows (e.g., "director", "editor", "reviewer").

**Tags:** `agents` `orchestration` `python`

### [AutoGen](https://github.com/microsoft/autogen) — ⭐ 60.8K

Microsoft framework for building multi-agent AI applications.

**Why it matters:** Multi-agent conversations and workflows with enterprise backing and strong research lineage.

**Tags:** `agents` `multi-agent` `microsoft`

### [OpenHands](https://github.com/All-Hands-AI/OpenHands) — ⭐ 86.4K

AI software development agents platform (formerly OpenDevin).

**Why it matters:** Reference for long-running autonomous agents with sandboxed execution — the model for headless automation.

**Tags:** `agents` `autonomy` `sandbox`

### [Aider](https://github.com/paul-gauthier/aider) — ⭐ 48.8K

AI pair programming in your terminal.

**Why it matters:** Excellent UX reference for tightly-scoped, repo-aware AI assistance and edit workflow.

**Tags:** `pair-programming` `cli` `ai`

## MCP (Model Context Protocol)

### [servers](https://github.com/modelcontextprotocol/servers) — ⭐ 90.1K

Reference servers for the Model Context Protocol (MCP) — the open standard connecting AI to tools and data.

**Why it matters:** MCP is the future of extensible AI tooling; OpenCut plans first-class MCP support, so this is the spec-adjacent reference set.

**Tags:** `mcp` `servers` `protocol`

### [modelcontextprotocol](https://github.com/modelcontextprotocol/modelcontextprotocol) — ⭐ 9.1K

The MCP specification and documentation itself.

**Why it matters:** The authoritative spec for building OpenCut Alt's MCP server and plugin surface.

**Tags:** `mcp` `spec` `docs`

## Local Inference

### [Ollama](https://github.com/ollama/ollama) — ⭐ 180.4K

Run large language models locally.

**Why it matters:** Private, offline AI for captioning, transcription, and effects — no cloud dependency.

**Tags:** `llm` `local` `inference`

## Evaluation & Testing

### [Promptfoo](https://github.com/promptfoo/promptfoo) — ⭐ 24.9K

Test and evaluate LLM apps, prompts, and agents with red-teaming and CI integration.

**Why it matters:** Ship AI features with quality gates — evaluate prompt quality and catch regressions before release.

**Tags:** `eval` `testing` `llm` `red-team`

## Design Guidelines for Agentic AI

### [AI Design Guide — Design Systems Directory](https://www.aidesign.guide/design-systems/)

Directory of 158 design systems, component libraries, and UI toolkits — including 29 AI-aware systems (19 with product UX guidelines, 12 with agent delivery via MCP, skills, `llms.txt`) with filters for tech stack and features.

**Why it matters:** The tool to choose the design guideline for agentic AI — compare UX patterns for AI features plus agent-consumable systems (MCP/skills/`llms.txt`) to inform OpenCut Alt's design language and AI-assisted UI generation.

**Tags:** `design-systems` `guidelines` `agentic-ai` `mcp` `ux`
