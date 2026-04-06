# Stage 4: Verify

Establish test baselines and verification habits so agent output is checked, not trusted.

## The problem

Agents are naturally optimistic. They default to happy-path implementations, write tests that confirm their own logic, and claim work is done before verifying it actually works. This stage adds the guardrails.

## Test baseline

### 1. Get tests passing

If the existing test suite has failures, fix them first. A red test suite teaches the agent that failures are normal and ignorable.

Run the tests. If they pass, note the pass rate and move on. If they fail:
- Are the failures real bugs or stale tests?
- Fix what's fixable, skip or delete what's genuinely stale
- Get to green before proceeding

### 2. Identify coverage gaps

From the audit and specs (Stages 1 and 3), identify modules that:
- Have specs but no tests
- Have complex logic but only happy-path tests
- Have tests that haven't been updated as the code evolved

Prioritize: **test the things agents are most likely to break.** Shared utilities, API contracts, and business logic with edge cases are higher priority than UI components or config files.

### 3. Write the missing tests

For each coverage gap:
1. Write a failing test that describes the expected behavior (from the spec or from reading the code)
2. Verify it passes against the current implementation
3. If it doesn't pass, you've found a bug or a spec drift — flag it

## Verification workflow

### The Red-Green-Agent loop

When using an agent to implement changes:

1. **Red** — write or identify a failing test that describes what you want (human writes or reviews the test)
2. **Green** — let the agent implement until the test passes
3. **Check** — review the agent's changes. Run the full test suite, not just the new test.

The key insight: **never let the agent write AND validate its own tests without human review of the test itself.** An agent that writes broken logic will write tests that confirm that broken logic. The human's job is to verify that the *tests* are correct, not just that they pass.

### Verification before completion

Before any agent work is considered done:
- Run the test suite. All tests pass.
- Run the linter. No new warnings.
- If there's a build step, run it. It succeeds.
- Read the diff. The changes make sense and match the intent.

This sounds obvious but agents will confidently say "done" without doing these checks unless the workflow requires it.

## Hooks for enforcement

Claude Code hooks can automate verification. Consider adding:

```json
// .claude/settings.json
{
  "hooks": {
    "postToolExecution": [
      {
        "matcher": "Write|Edit",
        "command": "npm test --silent 2>&1 | tail -5"
      }
    ]
  }
}
```

This runs tests automatically after file changes. Use hooks for things that should ALWAYS happen — they're more reliable than instructions because they execute mechanically, not probabilistically.

Other useful hooks:
- Run the linter after file edits
- Block writes to protected directories (generated code, vendored deps)
- Auto-format on save

## Comprehension check

For significant changes (not bug fixes or small features), ask yourself:

- **Can I explain what this change does without reading the diff?** If not, the change is too opaque to merge.
- **Do the tests verify the intent, or just the implementation?** Tests that mirror the code structure instead of testing behavior are fragile.
- **If this broke in production, would I know where to look?** If not, the change needs better observability.

This isn't a formal scale or a gate — it's a habit. The goal is to prevent comprehension debt from accumulating silently while velocity stays high.

## Document the test command

Make sure CLAUDE.md contains the exact test command. This seems trivial but it's one of the highest-impact things you can do — an agent that can run tests will self-correct. One that can't will guess.

```markdown
# In CLAUDE.md
## Commands
- Test: `npm test`
- Test single file: `npm test -- --testPathPattern=<pattern>`
- Lint: `npm run lint`
- Build: `npm run build`
```
