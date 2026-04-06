# Stage 1: The Context Audit (Discovery)

This stage is about identifying what the agent "sees" and where the "noise" is.

## Audit Criteria
1.  **Instruction Layer:**
    *   Locate `README.md`, `CLAUDE.md`, `.cursorrules`, or `AGENTS.md`.
    *   Count the total instructions. Is it over 50?
2.  **Knowledge Layer:**
    *   Identify "Grounding" documents: API specs, DB schemas, architecture diagrams.
    *   Check for "Silos of Ignorance": Code that hasn't been touched or documented recently.
3.  **Verification Layer:**
    *   Identify the test runner and current pass rate.
    *   Check if tests are integrated into the agent's environment.

## Actionable Steps
*   Run `ls -R` to map the codebase.
*   Use `grep_search` to find "TODO" or "FIXME" markers that indicate drift.
*   Generate a `CONTEXT_REPORT.md` (private to the target project) summarizing these findings.
