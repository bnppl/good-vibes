# Stage 3: Spec

Retroactively add specs to parts of the codebase that are complex, poorly documented, or where agents consistently produce wrong output.

## When to spec

Spec a module when:
- It contains complex business logic that isn't obvious from the code
- Agents keep getting it wrong despite good instruction files
- The original intent has drifted from the implementation
- Multiple people have different understandings of what it should do

## When NOT to spec

Don't spec:
- Simple CRUD operations
- Configuration files
- Code that's well-covered by tests that clearly express intent
- Code you're about to rewrite anyway
- Anything where the spec would just restate what the code already says

**A one-paragraph spec for a small module is still a spec.** Not everything needs the full template. Scale the formality to the complexity.

## How to write a retro-spec

### 1. Pick the module

From the audit (Stage 1), identify the highest-complexity or highest-drift areas. Start with one.

### 2. Read and understand

Read the module's code. Then explain its **intended behavior** — not what the code does line by line, but what it's *supposed to accomplish* and why.

Ask the user to validate your understanding. This is the most important step. If your understanding is wrong, the spec will be wrong.

### 3. Write the spec

Use the template in [assets/SPEC_TEMPLATE.md](../assets/SPEC_TEMPLATE.md) as a starting point, but scale it:

**For a small module** — a paragraph:
```markdown
# user-preferences.spec.md
Manages user display preferences (theme, language, timezone).
Preferences are stored in the user row, not a separate table.
Default to system locale if no preference is set.
Changes take effect on next page load, not immediately.
```

**For a complex module** — the full template with requirements, decisions, and verification plan.

### 4. Check against existing tests

Compare the spec against what the tests actually verify:
- Tests that pass but violate the spec → the spec or the code has drifted. Ask the user which is correct.
- Spec requirements with no test coverage → flag as gaps for Stage 4.

### 5. Place the spec

Put specs near the code they describe:
- `src/billing/SPEC.md` for the billing module
- `src/auth/SPEC.md` for the auth module

Then add a progressive disclosure link in CLAUDE.md:
```
Read src/billing/SPEC.md before modifying billing logic.
```

## The SDD Triangle

When a requirement changes, update in this order:
1. **Spec first** — update the intent
2. **Tests second** — update what you verify
3. **Code third** — update the implementation

If implementation reveals a better design, update the spec immediately. Specs that drift from reality are worse than no specs — they actively mislead the agent.

## Don't boil the ocean

You do not need to spec the entire codebase. Spec the 2-3 areas that will have the biggest impact on agent effectiveness, based on the audit. You can always come back and spec more later.
