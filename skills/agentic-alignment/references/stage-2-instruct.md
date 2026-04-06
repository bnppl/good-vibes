# Stage 2: Instruct

Set up or clean up the project's instruction files so agents can be immediately productive.

## The goal

A new agent session should be able to read CLAUDE.md and know:
- What this project is and what it does (1-2 sentences)
- The tech stack
- How to build, test, and lint (exact commands)
- Key conventions that aren't enforced by tooling
- What NOT to touch (generated files, vendored code, etc.)
- Where to find deeper context when needed (progressive disclosure links)

## What belongs in CLAUDE.md

- **Project identity** — what this is, in plain language
- **Tech stack** — languages, frameworks, key dependencies
- **Commands** — build, test, lint, deploy (exact shell commands, not descriptions)
- **Conventions the agent can't infer** — naming patterns, error handling approach, architectural boundaries, preferred libraries
- **Progressive disclosure links** — `"Read docs/api-conventions.md before modifying API endpoints"`, `"See backend/CLAUDE.md for database conventions"`
- **Examples of good output** — a concrete example of the right way to write a test, handle an error, or structure a component in this project. One good example is worth ten rules.

## What does NOT belong

- File structure / directory layout — the agent can `ls` and `Glob`
- Git history or recent changes — the agent can `git log`
- Dependency lists — the agent can read package.json / requirements.txt / go.mod
- Obvious language conventions — the agent knows how Go/Python/TypeScript works
- Aspirational rules nobody follows — if the codebase doesn't actually follow a rule, don't add it
- Long explanations — keep instructions to one line each where possible

## How to write good instructions

**Be specific, not vague:**
- Bad: "Follow best practices for error handling"
- Good: "Wrap external API calls in try/catch. Log the error with context. Return a typed Result<T, AppError>, never throw."

**Use examples when the pattern is hard to describe:**
- Bad: "Use our standard test structure"
- Good: "Tests follow this pattern — see `src/users/users.service.test.ts` for a canonical example"

**Use progressive disclosure for complex topics:**
- Bad: [300 words about the database migration process inline in CLAUDE.md]
- Good: "Read `docs/migrations.md` before creating or modifying database migrations"

**Scope rules to where they apply:**
- If a rule only applies to the backend, put it in `backend/CLAUDE.md`
- If a rule only applies to tests, put it in a section clearly labeled "Testing"

## Process

1. **Start from the audit.** Use `CONTEXT_AUDIT.md` to understand what already exists.

2. **Draft or revise CLAUDE.md.** If one exists, clean it up. If not, create one.

3. **For every instruction, ask:** "Would an agent that ignores this produce noticeably worse output?" If not, cut it.

4. **Present the draft to the user.** Walk through it instruction by instruction. Use multiple-choice questions when deciding whether to keep, move, or cut a borderline instruction:
   - **Keep** — it's high-signal and belongs here
   - **Move** — it's valid but should be in a subdirectory config or a linked doc (progressive disclosure)
   - **Cut** — it's derivable, stale, or too vague to be useful

5. **Apply the agreed changes.** Write the final CLAUDE.md (and any subdirectory configs).

6. **Verify.** Start a fresh conversation in the project and see if the agent picks up the instructions correctly. Check that the commands work, the conventions are understood, and the progressive disclosure links resolve.

## Keep it focused

The goal is a CLAUDE.md that is short enough to read in 30 seconds and specific enough to be useful. If it's longer than ~40-50 lines, look for things to move to progressive disclosure or cut entirely. This isn't a hard limit — some complex projects need more — but it's a good default to aim for.
