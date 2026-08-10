# AI & Agent Tooling

Agent frameworks, MCP, local inference, and security tooling — the layer that makes OpenCut Alt smart, scriptable, and safe.

## Agent Skill Security

### [SkillSpector](https://github.com/NVIDIA/SkillSpector) — ⭐ 14.4K

NVIDIA's security scanner for AI agent skills — detects vulnerabilities, malicious patterns, and security risks before installing agent skills.

**Why it matters:** Before OpenCut Alt ships (or consumes) third-party agent skills and plugins, this is the tool to vet them.

**Tags:** `security` `agents` `scanning` `skills`

## Agent Frameworks

### [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) — ⭐ 28.5K

OpenAI's official Python SDK for building agentic AI applications.

**Why it matters:** A clean, modern agent model with handoffs and guardrails — a solid base for an in-editor AI assistant.

**Tags:** `agents` `openai` `sdk`

### [LangChain](https://github.com/langchain-ai/langchain) — ⭐ 143.8K

Framework for developing applications powered by language models.

**Why it matters:** Huge ecosystem of tools and integrations — useful when wiring many services into AI features.

**Tags:** `llm` `framework` `tools`

### [CrewAI](https://github.com/crewAIInc/crewAI) — ⭐ 56.9K

Framework for orchestrating role-playing, autonomous AI agents.

**Why it matters:** Role-based multi-agent patterns for automating editing workflows (e.g., "director", "editor", "reviewer").

**Tags:** `agents` `orchestration` `python`

### [AutoGen](https://github.com/microsoft/autogen) — ⭐ 60.3K

Microsoft framework for building multi-agent AI applications.

**Why it matters:** Multi-agent conversations and workflows with enterprise backing and strong research lineage.

**Tags:** `agents` `multi-agent` `microsoft`

### [OpenHands](https://github.com/All-Hands-AI/OpenHands) — ⭐ 83.6K

AI software development agents platform (formerly OpenDevin).

**Why it matters:** Reference for long-running autonomous agents with sandboxed execution — the model for headless automation.

**Tags:** `agents` `autonomy` `sandbox`

### [Aider](https://github.com/paul-gauthier/aider) — ⭐ 48.1K

AI pair programming in your terminal.

**Why it matters:** Excellent UX reference for tightly-scoped, repo-aware AI assistance and edit workflow.

**Tags:** `pair-programming` `cli` `ai`

## MCP (Model Context Protocol)

### [servers](https://github.com/modelcontextprotocol/servers) — ⭐ 89.4K

Reference servers for the Model Context Protocol (MCP) — the open standard connecting AI to tools and data.

**Why it matters:** MCP is the future of extensible AI tooling; OpenCut plans first-class MCP support, so this is the spec-adjacent reference set.

**Tags:** `mcp` `servers` `protocol`

### [modelcontextprotocol](https://github.com/modelcontextprotocol/modelcontextprotocol) — ⭐ 8.9K

The MCP specification and documentation itself.

**Why it matters:** The authoritative spec for building OpenCut Alt's MCP server and plugin surface.

**Tags:** `mcp` `spec` `docs`

## Local Inference

### [Ollama](https://github.com/ollama/ollama) — ⭐ 178.2K

Run large language models locally.

**Why it matters:** Private, offline AI for captioning, transcription, and effects — no cloud dependency.

**Tags:** `llm` `local` `inference`

## Evaluation & Testing

### [Promptfoo](https://github.com/promptfoo/promptfoo) — ⭐ 24.1K

Test and evaluate LLM apps, prompts, and agents with red-teaming and CI integration.

**Why it matters:** Ship AI features with quality gates — evaluate prompt quality and catch regressions before release.

**Tags:** `eval` `testing` `llm` `red-team`
