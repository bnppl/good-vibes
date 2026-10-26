---
title: Birgitta Böckeler — small ideas
parent: Birgitta Böckeler Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: engineers/birgitta-bockeler/recent-ai.md
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
---

# Birgitta Böckeler — recent AI use

Publications since 1 October 2025. Source dates and evidence kinds appear on each card. [Earlier cards and principles](background.md) remain outside this feed.

## Card 09

### Maintainability sensors on an analytics dashboard

> **She tested maintainability feedback on a real dashboard.**
>
> Personal use · published 2026-05-27. Her May 2026 written account describes experimenting with structural and test-quality sensors while developing an internal analytics dashboard. Her August account separately explores TDD inside the agent loop. These are different experiments: one concerns maintainability feedback, the other a limited workflow comparison.

**In the wild:** Practice period: Dashboard experiments before publication; exact dates not stated.

**Takeaway:** Distinguish the reported work from a complete daily workflow.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://martinfowler.com/articles/sensors-for-coding-agents.html)

---

## Card 01

### The missing alarm

> **More instructions do not tell you whether they worked.**
>
> Recommendation · published 2026-04-02. Böckeler pairs guidance before action with feedback afterwards. These serve different purposes; a reliable structural check still cannot decide the intended feature.

**In the wild:** Published framework: guides steer action; sensors return feedback. This is advice, distinct from the later dashboard experiment.

**Takeaway:** Give each control a job and a failure it can detect.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://martinfowler.com/articles/harness-engineering.html)

---

## Card 02

### The unopened manual

> **An available skill is not the same as loaded context.**
>
> Recommendation · published 2026-02-05. Her context primer distinguishes loading chosen by a human, the model, or agent software. Important task guidance may need explicit loading.

**In the wild:** Published primer: context can be selected by a human, model or harness. Feature descriptions retain their February 2026 date.

**Takeaway:** Verify the context the agent actually used.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html)

---

## Card 03

### Three kinds of spec

> **Writing a spec first says little about its future.**
>
> Personal use · published 2025-10-15. She distinguishes spec-first, spec-anchored, and spec-as-source. Retaining a document creates a maintenance question; the categories are not automatic endorsements.

**In the wild:** Retrospective trial: the article was published in October 2025, but she tried Kiro, spec-kit and Tessl in September.

**Takeaway:** Choose a specification lifecycle deliberately.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)

---

## Card 05

### The maintenance signal

> **Working today is only one part of being easy to change.**
>
> Personal use · published 2026-05-27. Her sensor experiments explore structural and test-quality feedback in a specific dashboard. They do not establish the best universal tool stack.

**In the wild:** Reported project: she experimented with structural and test-quality feedback on an internal analytics dashboard.

**Takeaway:** Inspect the change surface as well as the result.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://martinfowler.com/articles/sensors-for-coding-agents.html)

---

## Card 06

### The TDD question

> **An agent following TDD is a different experiment from a human owning tests.**
>
> Personal use · published 2026-08-10. Her small agent-loop evaluation found no clear TDD advantage in that setting. Limited tasks and LLM-based judgment prevent a general conclusion about TDD.

**In the wild:** Reported experiment: small greenfield tasks, model-based quality judgments and imperfect TDD adherence limit the conclusions.

**Takeaway:** Keep the research question narrower than the headline.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html)

---
