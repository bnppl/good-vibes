# Stage 2: Establishing the "Constitution"

This stage codifies the project's non-negotiable rules while optimizing for the **~50 Instruction Ceiling**.

## The "Top 50" Selection Protocol
When helping the user refine their `CLAUDE.md` or `.cursorrules`, **you MUST use `ask_user` with multiple-choice options** to decide which rules to keep, merge, or move to progressive disclosure.

### Instruction Selection Workflow:
1.  **Audit:** Identify all current rules (explicit and implicit).
2.  **Filter:** Propose a "Top 20" essential list (Role, Boundaries, Core Commands).
3.  **Collaborate:** Use `ask_user` for the remaining "Gray Area" rules:
    *   *"Rule X (Error handling) is currently inlined. Should we: A) Keep it in the main config, B) Move it to 'docs/errors.md' (Progressive Disclosure), or C) Delete it as it's standard for this stack?"*
4.  **Enforce:** Once the count hits 50, you must block any new rules unless a corresponding rule is removed or moved to a sub-directory config.

## Progressive Disclosure Patterns
To keep the instruction layer sharp, use these patterns:
*   **Link-to-Docs:** Instead of: `Always use PascalCase for React components and handle errors with try/catch...`, use: `Follow React conventions in 'docs/conventions.md'.`
*   **Sub-Directory Scoping:** If a rule only applies to `/backend`, move it to `/backend/CLAUDE.md`.
*   **On-Demand Skills:** Move complex, multi-step workflows (like "Deployment" or "Database Migration") into standalone Skills.
