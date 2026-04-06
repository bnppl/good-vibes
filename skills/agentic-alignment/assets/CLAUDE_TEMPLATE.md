# CLAUDE.md Template

Use this as a starting point. Delete sections that don't apply. Keep it short.

```markdown
# [Project Name]

[One sentence: what this project does.]

## Tech stack

[Language, framework, key dependencies — just the ones the agent needs to know about.]

## Commands

- Build: `[exact command]`
- Test: `[exact command]`
- Test single file: `[exact command with placeholder]`
- Lint: `[exact command]`
- Dev server: `[exact command]`

## Conventions

[Only conventions the agent can't infer from the code or tooling. Keep each to one line.]

- [Convention 1]
- [Convention 2]
- [Convention 3 — or link to a canonical example: "See src/users/users.service.test.ts for test structure"]

## Boundaries

- Do not modify files in `[generated/vendored/etc]`
- [Any other hard boundaries]

## Context

- [Progressive disclosure links:]
- Read `docs/api-conventions.md` before modifying API endpoints
- Read `src/billing/SPEC.md` before changing billing logic
- Read `backend/CLAUDE.md` for database conventions
```

## Principles

- Every instruction should fit on one line
- If you need more than one line to explain something, link to a doc instead
- If an instruction is "follow standard [language] conventions" — delete it, the agent already knows
- If the codebase doesn't actually follow a convention, don't list it
- Aim for under 50 lines total — not a hard ceiling, but a sign you're being focused
