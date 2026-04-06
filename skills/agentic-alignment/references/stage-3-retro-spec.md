# Stage 3: The "Retro-Spec" (SDD Layer)

Establishing the "Source of Truth" for intent in a brownfield codebase.

## Reverse-Engineering Workflow
1.  **Module Selection:** Identify a high-complexity or high-drift module.
2.  **Comprehension Check:** Ask the agent to read the module and explain its *intended* behavior (not just what the code does).
3.  **Drafting the Spec:** Use [assets/SPEC_TEMPLATE.md](../assets/SPEC_TEMPLATE.md) to generate a `SPEC.md`.
4.  **Verification:** Compare the spec against existing tests. If the tests pass but violate the spec, identify the "Intent Drift."

## Maintaining Synchronization
*   The **SDD Triangle:** If a requirement changes, update the `SPEC.md` *first*, then the tests, then the code.
*   **Bidirectional Sync:** If implementation surfaces a better design, update the `SPEC.md` immediately to prevent debt.
