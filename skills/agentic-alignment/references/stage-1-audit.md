# Stage 1: Audit

Understand what the agent currently "sees" when it starts a session in this project.

## What to check

### 1. Instruction files

Look for: `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `.github/copilot-instructions.md`, any `README.md` with agent-facing instructions.

For each file found:
- How many distinct instructions does it contain?
- Are any instructions contradictory?
- Are any instructions duplicating information the agent could derive (file structure, git history, installed dependencies)?
- Are there stale instructions that reference code, tools, or patterns that no longer exist?
- Is the signal-to-noise ratio high? Would a new developer (or agent) reading this know what matters?

Also check for **subdirectory instruction files** — `backend/CLAUDE.md`, `frontend/CLAUDE.md`, etc. These are good practice for scoping rules to where they apply.

### 2. Test infrastructure

- What test runner is configured? Can you run tests with a single command?
- What's the current pass rate? Run the tests.
- Are there test files that haven't been updated in a long time relative to the code they test?
- Is the test command documented anywhere the agent would find it?

### 3. Documentation state

- Is there an architecture doc? Is it current or stale?
- Are there API specs (OpenAPI, GraphQL schema, etc.)?
- Are complex business logic areas explained anywhere, or is tribal knowledge the only source?
- Are there `TODO`/`FIXME` markers that indicate known drift or debt?

### 4. Tech stack and conventions

- What's the tech stack? (Languages, frameworks, build tools, package managers)
- Are there linters/formatters configured? What are the key style conventions?
- Are there patterns the codebase follows that aren't enforced by tooling? (e.g., repository pattern, specific error handling approach, naming conventions)

## How to do the audit

Use these tools:

```
Glob("**/CLAUDE.md")           — find instruction files
Glob("**/.cursorrules")
Glob("**/AGENTS.md")
Grep("TODO|FIXME")             — find drift markers
Glob("**/*.test.*")            — find test files
Glob("**/*.spec.*")
```

Run the project's test suite to get a pass/fail baseline.

Read the main instruction file(s) and any architecture docs.

## Output

Write a `CONTEXT_AUDIT.md` to the project root summarizing what you found. Structure:

```markdown
# Context Audit — [date]

## Instruction files
- [What exists, how many instructions, quality assessment]

## Test infrastructure
- [Test runner, command, current pass rate, coverage gaps]

## Documentation
- [What exists, what's current, what's stale]

## Conventions
- [Tech stack, style rules, patterns — things that should be in CLAUDE.md but aren't]

## Recommendations
- [Prioritized list: what would have the biggest impact on agent effectiveness?]
  - Which stages (2, 3, 4) are worth doing based on this audit?
  - What's the single highest-impact change?
```

**Present the audit to the user before moving on.** They decide which recommendations to pursue.
