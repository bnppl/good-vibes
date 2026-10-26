(function () {
  'use strict';
  window.EngineerVisuals = window.EngineerVisuals || {};
  window.EngineerVisuals['exam-ownership'] = function (ctx) {
    const { root, el, dimension, evidenceLinks } = ctx;
    const profiles = [...ctx.profiles].sort((a, b) => a.name.localeCompare(b.name));
    const roles = {
      human: { symbol: 'H', label: 'Human responsibility' },
      agent: { symbol: 'A', label: 'Implementing agent' },
      checker: { symbol: 'C', label: 'Separate check / fixed evaluator' },
      shared: { symbol: 'H+A', label: 'Human + agent interaction' },
      unknown: { symbol: '?', label: 'Owner not established' }
    };
    // These are qualified editorial readings of the cache, not observations of
    // a common execution or access-control audits. Stage ownership is left
    // unknown when a recommendation does not identify a specific owner.
    const readings = {
      'dave-farley': {
        scope: '25 October 2026 proposal · human-owned acceptance contract',
        steps: [['human', 'Executable acceptance examples', 'D02'], ['human', 'Human-owned failing acceptance checks', 'D04'], ['agent', 'Implement within the contract', 'D07'], ['human', 'Own intent; inspect when risk warrants', 'D06']],
        boundary: 'Human control stipulated', boundaryType: 'instruction',
        boundaryNote: 'Acceptance-test changes need human control. The cache does not establish an enforced private permission scheme.', source: 'D11'
      },
      'kent-beck': {
        scope: 'June 2025 account and inspected BPlusTree3 instructions · historical/project-specific',
        steps: [['human', 'Steer with a next-test plan', 'D02'], ['shared', 'Test-first and reference checks', 'D04'], ['agent', 'Augmented implementation under intervention', 'D06'], ['human', 'Inspect design; intervene off-course', 'D06']],
        boundary: 'Enforced protection not established', boundaryType: 'unknown',
        boundaryNote: 'The account includes unwanted work and removed tests. Our stop rules are adaptations, not demonstrated enforcement.', source: 'D11'
      },
      'simon-willison': {
        scope: 'October 2026 production-feature account plus agentic-engineering guidance',
        steps: [['shared', 'Conversational requirements + preview', 'D02'], ['unknown', 'Red/green plus exploratory execution; fixed ownership not specified', 'D04'], ['agent', 'Executing agents; scoped parallel tasks', 'D07'], ['human', 'Author owns initial review', 'D06']],
        boundary: 'Protected-exam policy not established', boundaryType: 'unknown',
        boundaryNote: 'The documented security guidance concerns separation of private data, untrusted input and outbound communication. It is not a protected-test policy.', source: 'D11'
      },
      'birgitta-bockeler': {
        scope: 'August 2026 exploratory evaluation; supervised brownfield reports are separately dated',
        steps: [['human', 'Evaluate intent and specification formats', 'D02'], ['shared', 'Distinguish human-owned checks from agent-internal TDD', 'D04'], ['agent', 'Supervised implementation with steering', 'D07'], ['human', 'Retain responsibility for code and test quality', 'D06']],
        boundary: 'Protection policy not established', boundaryType: 'unknown',
        boundaryNote: 'The limited evaluation does not establish complete permissions or protected-test controls. Agent-internal TDD and human-owned review are distinct.', source: 'D11'
      },
      'addy-osmani': {
        scope: '2026 harness and orchestration guidance · not a complete personal setup',
        steps: [['human', 'Review an evolving specification and plan', 'D02'], ['shared', 'Characterise behaviour; check original requirements', 'D04'], ['agent', 'Scoped workers within verification gates', 'D07'], ['human', 'Own acceptance, audit and explanation', 'D06']],
        boundary: 'Enforcement recommended, not demonstrated', boundaryType: 'instruction',
        boundaryNote: 'Important boundaries should be enforced. A prose policy does not demonstrate resource permissions or protected acceptance tests.', source: 'D11'
      },
      'gojko-adzic': {
        scope: 'October 2026 public factory artifact · inspected, not executed',
        steps: [['human', 'Approve consequential plans and decisions', 'D02'], ['checker', 'Worker checks, merged gates, final challenge', 'D04'], ['agent', 'Scheduled worker roles', 'D07'], ['human', 'Supervise decisions throughout', 'D06']],
        boundary: 'Role separation documented; enforcement unaudited', boundaryType: 'instruction',
        boundaryNote: 'Published hooks regulate commands by role. Hook scope and tool internals limit what that proves; this is not a comprehensive permission audit.', source: 'D11'
      },
      'martin-fowler': {
        scope: 'Conceptual agentic-engineering guidance with historical self-testing material',
        steps: [['human', 'Concrete scenarios and a context interview', 'D02'], ['unknown', 'Executable feedback; exact modern stack unknown', 'D04'], ['unknown', 'Current personal agent configuration unknown', 'D07'], ['human', 'Review code, tests and other feedback', 'D06']],
        boundary: 'Personal protection not established', boundaryType: 'unknown',
        boundaryNote: 'Security concerns and hosted guest articles do not establish Fowler’s own deployed test protection or sandbox.', source: 'D11'
      },
      'armin-ronacher': {
        scope: 'December 2025 planning preference; June/October 2026 bounded-work and harness accounts',
        steps: [['shared', 'Conversational clarification and Markdown handoff', 'D02'], ['unknown', 'Current complete test-first policy unknown', 'D04'], ['agent', 'Bounded investigations; long-lived work differs', 'D07'], ['human', 'Humans/organisations retain responsibility', 'D06']],
        boundary: 'Harness trust is not execution isolation', boundaryType: 'unknown',
        boundaryNote: 'The October architecture account separates harness trust from execution-environment isolation, without establishing a complete personal permission policy.', source: 'D11'
      },
      'steve-yegge': {
        scope: 'December 2025 inspection guidance and August 2026 private-harness account',
        steps: [['shared', 'Conversation/design become work records', 'D02'], ['agent', 'Recurring AI inspection and tests', 'D04'], ['agent', 'Fleet/private-harness delegation, separately dated', 'D07'], ['human', 'Human diff review retained in the short term', 'D06']],
        boundary: 'Complete private controls not established', boundaryType: 'unknown',
        boundaryNote: 'An episode-page account describes mechanical constraints. It does not establish a verified, complete protected-test or permission configuration.', source: 'D11'
      },
      'gene-kim': {
        scope: 'Joint Kim/Yegge guidance; January 2026 human-accountability interview',
        steps: [['shared', 'Concrete requirements, examples and refinement', 'D02'], ['unknown', 'Tests/expectations before generation; authorship unspecified', 'D04'], ['agent', 'Calibrated pairing or delegation', 'D07'], ['human', 'Retain accountability when delegating', 'D06']],
        boundary: 'Enforced protections not established', boundaryType: 'unknown',
        boundaryNote: 'Accountability and warnings about unchecked work do not establish current access controls. Yegge’s tooling is not automatically Kim’s setup.', source: 'D11'
      },
      'harper-reed': {
        scope: '2025 planning/TDD accounts; October public instructions and January 2026 terminal account',
        steps: [['shared', 'Clarify the idea, then a prompt plan', 'D02'], ['agent', 'Agent-assisted TDD, linting and checks', 'D04'], ['agent', 'Incremental agent work; remote sessions', 'D07'], ['unknown', 'Verification required; full review execution unobserved', 'D06']],
        boundary: 'Protected-exam policy not established', boundaryType: 'unknown',
        boundaryNote: 'Published verification rules are not proof of compliance or protected files. The September credential-exposure experiment has a separate scope.', source: 'D11'
      },
      'matt-pocock': {
        scope: 'Pinned October 2026 skill artifacts · instructions inspected, not run',
        steps: [['human', 'Agree public seams and settled decisions', 'D02'], ['agent', 'Red/green at human-agreed public seams', 'D04'], ['agent', 'Dependency-ready tickets and worktrees', 'D07'], ['shared', 'Separate review contexts; human QA remains', 'D06']],
        boundary: 'Protected-test policy not established', boundaryType: 'unknown',
        boundaryNote: 'Setup confirmation, human agreement and separate review contexts do not demonstrate filesystem protection or evaluator independence.', source: 'D11'
      },
      'robert-c-martin': {
        scope: 'Published SwarmForge artifact; September 2026 report moves away from the custom harness',
        steps: [['human', 'Higher-level reviewable source (joint outline)', 'D02'], ['unknown', 'Mutation guidance + published quality instructions', 'D04'], ['agent', 'Terminal-agent report; public framework is separate', 'D07'], ['human', 'Mostly above-code supervision; occasional inspection', 'D06']],
        boundary: 'Metric substitutions forbidden in instructions', boundaryType: 'instruction',
        boundaryNote: 'SwarmForge forbids fabricated metric substitutes and hand-edited mutation manifests. Published prompts do not establish enforcement or current private practice.', source: 'D11'
      },
      'peter-steinberger': {
        scope: 'October/December 2025 personal workflow; later shared artifacts are separate evidence',
        steps: [['shared', 'Conversational intent; plan uncertain work', 'D02'], ['agent', 'Tests after implementation, same context', 'D04'], ['agent', 'Human-steered parallel terminal agents', 'D07'], ['human', 'Selective code reading + architectural understanding', 'D06']],
        boundary: 'Review authority documented; protection unaudited', boundaryType: 'instruction',
        boundaryNote: 'Oracle preview and published authority distinctions help inspection. They do not prove resource-level enforcement or protected-test permissions.', source: 'D11'
      },
      'david-heinemeier-hansson': {
        scope: 'January 2026 supervised delegation; testing preferences are from May 2024',
        steps: [['unknown', 'Current specification format not established', 'D02'], ['unknown', 'Current agent test cadence unknown', 'D04'], ['agent', 'Supervised delegation', 'D07'], ['human', 'Outcome review and agent guidance', 'D06']],
        boundary: 'Coding-test protection not established', boundaryType: 'unknown',
        boundaryNote: 'The February VM isolation account concerns one OpenClaw experiment, not a universal coding-agent permission or protected-test policy.', source: 'D11'
      },
      'andrej-karpathy': {
        scope: 'March 2026 autoresearch instruction artifact · bounded ML experiment, not software unit TDD',
        steps: [['human', 'Human specification and oversight (endorsed account)', 'D02'], ['checker', 'Existing baseline and fixed evaluator', 'D04'], ['agent', 'One bounded ML experiment agent', 'D07'], ['checker', 'Compare experiment outcome to retained baseline', 'D04']],
        boundary: 'Evaluator edits forbidden in instructions', boundaryType: 'instruction',
        boundaryNote: 'The published experiment excludes evaluator edits and dependencies. That is an instructional boundary, not a reproduced access-control guarantee; human oversight remains separate.', source: 'D11'
      },
      'charity-majors': {
        scope: 'March/June/September 2026 operational and organisational guidance',
        steps: [['human', 'Explicit required behaviour and commitments', 'D02'], ['unknown', 'Pre-production + operational checks; owners unspecified', 'D04'], ['unknown', 'Personal coding-agent topology unknown', 'D07'], ['human', 'Person owns work; review and validation differ', 'D06']],
        boundary: 'Personal protected-test policy unknown', boundaryType: 'unknown',
        boundaryNote: 'Operational ownership does not establish current private coding permissions. Organisational notes retain their original authorship.', source: 'D11'
      },
      'chip-huyen': {
        scope: 'January 2025 and earlier AI-product guidance · not current personal coding-agent practice',
        steps: [['human', 'Establish user need before selecting AI', 'D02'], ['human', 'Human assessment validates product judgments', 'D04'], ['unknown', 'Private coding-agent implementation not established', 'D07'], ['human', 'Review outputs and automated evaluators', 'D06']],
        boundary: 'Product risk guidance, no private protection policy', boundaryType: 'unknown',
        boundaryNote: 'Write-capable tool risk deserves explicit consideration. This does not establish a coding sandbox or protected acceptance-test setup.', source: 'D11'
      },
      'hamel-husain': {
        scope: 'AI-product quality · 2025 guidance plus joint skills and September 2026 trial',
        steps: [['human', 'Domain experts inspect examples and define criteria', 'D02'], ['shared', 'Code checks + human-calibrated judges', 'D04'], ['agent', 'Agents assist discovery/evaluator work (joint skills)', 'D07'], ['human', 'Inspect data and evaluator, not a score alone', 'D06']],
        boundary: 'Evaluator validation is not test-file protection', boundaryType: 'unknown',
        boundaryNote: 'Inline guardrails and outcome evaluation are different controls. The cache does not establish his personal coding sandbox or protected-test policy.', source: 'D11'
      },
      'jason-liu': {
        scope: 'Dated RAG/product evaluation and context guidance; not a private coding workflow',
        steps: [['human', 'Separate information gaps from capability gaps', 'D02'], ['unknown', 'Define retrieval and answer relationships; owner unspecified', 'D04'], ['unknown', 'Subagent reads ≠ complete personal implementation setup', 'D07'], ['human', 'Name product quality being judged', 'D06']],
        boundary: 'Bounded loops, no demonstrated test protection', boundaryType: 'unknown',
        boundaryNote: 'Deterministic starts and loop limits are application guidance. They do not demonstrate a private permission, sandbox or protected-test policy.', source: 'D11'
      }
    };
    const shell = el('div', 'view-exam-ownership');
    const intro = el('p', 'visual-note', 'Editorial reading of documented ownership. A rule that says “do not change the test” is different from a capability boundary that prevents it.');
    const controls = el('div', 'visual-controls');
    const mainField = el('label', 'visual-field', 'Engineer');
    const mainSelect = el('select', 'visual-select');
    mainSelect.setAttribute('aria-label', 'Engineer');
    const compareField = el('label', 'visual-field', 'Compare with');
    const compareSelect = el('select', 'visual-select');
    compareSelect.setAttribute('aria-label', 'Compare with');
    compareSelect.append(el('option', '', 'No comparison'));
    compareSelect.options[0].value = '';
    for (const p of profiles) {
      const a = el('option', '', p.name); a.value = p.id; mainSelect.append(a);
      const b = el('option', '', p.name); b.value = p.id; compareSelect.append(b);
    }
    mainSelect.value = 'dave-farley'; compareSelect.value = 'andrej-karpathy';
    mainField.append(mainSelect); compareField.append(compareSelect); controls.append(mainField, compareField);
    const legend = el('div', 'exam-legend');
    for (const [id, r] of Object.entries(roles)) {
      const item = el('span', 'exam-legend-item'); item.append(el('span', 'exam-owner exam-owner-' + id, r.symbol), el('span', '', r.label)); legend.append(item);
    }
    const diagrams = el('div', 'exam-comparisons');
    const live = el('p', 'visual-note'); live.setAttribute('aria-live', 'polite');
    shell.append(intro, controls, legend, diagrams, live); root.append(shell);
    const stageNames = ['Define success', 'Design the checks', 'Implement', 'Accept / assess'];
    function renderProfile(p) {
      const r = readings[p.id];
      const panel = el('section', 'exam-panel');
      const heading = el('div', 'exam-heading');
      heading.append(el('h2', '', p.name), ctx.link('Profile ↗', ctx.profileUrl(p)));
      panel.append(heading, el('p', 'exam-scope', r.scope));
      const flow = el('ol', 'exam-flow'); flow.setAttribute('aria-label', p.name + ': ownership across four checkpoints');
      r.steps.forEach(([role, text, source], index) => {
        const stage = el('li', 'exam-stage exam-stage-' + role);
        const stageHeader = el('div', 'exam-stage-header');
        stageHeader.append(el('span', 'exam-step-number', String(index + 1)), el('h3', '', stageNames[index]));
        const actor = el('div', 'exam-actor'); actor.append(el('span', 'exam-owner exam-owner-' + role, roles[role].symbol), el('span', '', roles[role].label));
        stage.append(stageHeader, actor, el('p', 'exam-mechanism', text));
        const d = dimension(p, source);
        const link = ctx.link('Evidence ↗', ctx.profileUrl(p, d ? d.claim : undefined)); link.className = 'exam-stage-source';
        link.setAttribute('aria-label', stageNames[index] + ': ' + (d ? d.evidence + '; ' + d.title : 'profile evidence'));
        stage.append(link); flow.append(stage);
      });
      panel.append(flow);
      const boundary = el('div', 'exam-boundary exam-boundary-' + r.boundaryType);
      const icon = el('i'); icon.setAttribute('data-lucide', 'shield-check'); icon.setAttribute('aria-hidden', 'true');
      const label = el('h3', '', 'Can the implementer change its exam?');
      const answer = el('p', 'exam-boundary-answer', r.boundary);
      const note = el('p', '', r.boundaryNote);
      const d = dimension(p, r.source); boundary.append(icon, label, answer, note, ctx.link('Boundary evidence ↗', ctx.profileUrl(p, d ? d.claim : undefined)));
      panel.append(boundary);
      const details = el('details', 'exam-evidence'); details.append(el('summary', '', 'Read exact positions and qualifications'));
      for (const id of ['D02', 'D04', 'D06', 'D07', 'D11']) {
        const d = dimension(p, id); if (!d) continue;
        const evidence = el('section', 'exam-claim');
        evidence.append(el('h3', '', d.title), el('p', 'exam-evidence-meta', d.evidence + ' · checked ' + (d.checked || p.checked || 'date not established')), el('p', '', d.position));
        if (d.qualification) evidence.append(el('p', 'visual-note', d.qualification));
        evidence.append(evidenceLinks(p, [id])); details.append(evidence);
      }
      panel.append(details, el('p', 'visual-note', 'Research checked ' + (p.checked || 'date not established') + '. A checked date is not the practice date. Roles are an editorial reading, not a reproduced permission audit.'));
      return panel;
    }
    function render() {
      diagrams.replaceChildren();
      const ids = [...new Set([mainSelect.value, compareSelect.value].filter(Boolean))];
      const selected = ids.map(id => profiles.find(p => p.id === id)).filter(Boolean);
      for (const p of selected) diagrams.append(renderProfile(p));
      live.textContent = selected.map(p => p.name).join(' compared with ') + '. Unknown ownership remains explicit; no effectiveness ranking is implied.';
      ctx.icons();
    }
    mainSelect.addEventListener('change', render); compareSelect.addEventListener('change', render); render();
  };
})();
