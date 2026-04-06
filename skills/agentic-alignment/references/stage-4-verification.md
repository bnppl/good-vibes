# Stage 4: The TDD Baseline (Verification Layer)

Enforcing "Tests as Prompts" to prevent future "Technical Debt at Industrial Speed."

## The Red-Green-Agent Loop
1.  **Demand a Failing Test:** Before any implementation, the agent MUST execute a test that fails due to the missing feature/bug.
2.  **Implementation:** The agent writes the minimal code to pass the test.
3.  **Comprehension Check:** Apply the **1-5 Rule** via `ask_user`:
    *   *"I've implemented the fix. On a scale of 1-5, how well do you understand the changes? (Reminder: 1 = Black Box, 5 = Full Mastery)."*

## Active Inquiry Protocols
*   The agent should proactively ask "Why?" when it encounters an undocumented architectural choice.
*   If the user scores their understanding as < 3, the agent **MUST** provide a concise explanation of the "Why" behind its choices before the session ends.
