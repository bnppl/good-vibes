# SPEC.md Template

Scale this to the complexity of the module. A simple module needs a paragraph, not the full template.

```markdown
# [Module Name] — Spec

## Purpose

[What this module does and why it exists. 2-3 sentences max.]

## Requirements

[Use GIVEN/WHEN/THEN for complex behavior. Use plain bullets for simple behavior.]

- GIVEN [precondition], WHEN [action], THEN [expected result]
- GIVEN [precondition], WHEN [action], THEN [expected result]

## Decisions

[Architectural choices and why they were made. These prevent agents from "improving" things that are intentional.]

- [Decision]: [Rationale]
- [Decision]: [Rationale]

## Interfaces

- Inputs: [types/schemas]
- Outputs: [types/schemas]
- Dependencies: [other modules, external APIs]

## Edge cases

[The specific cases that agents are most likely to get wrong.]

- [Edge case 1 — what should happen]
- [Edge case 2 — what should happen]
```

## Tips

- The "Decisions" section is the most valuable part for agents. It prevents them from refactoring away intentional choices.
- "Edge cases" is the second most valuable. Agents default to happy paths.
- If the spec is longer than the code it describes, you've over-specified. Scale back.
- Specs go stale. If you update the code, update the spec. A wrong spec is worse than no spec.
