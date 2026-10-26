/* Lesson content comes from the weekly Markdown pages rendered by Jekyll. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const storageKey = "good-vibes-learning-deck-v1";
  const stages = ["learn", "recall", "try"];
  let cards = [],
    weeks = [],
    reviewed = new Set(),
    index = 0,
    stage = 0;
  let saved = {},
    storageAvailable = true,
    hasRendered = false;
  const fragment = document.createElement("div");

  // Keep relative links working on both / and /repository-name/ Pages sites.
  function resolveLinks(element, source) {
    element.querySelectorAll("a[href]").forEach((link) => {
      const url = new URL(
        link.getAttribute("href"),
        new URL(source, location.href),
      );
      if (url.origin === location.origin)
        url.pathname = url.pathname.replace(/\.md$/, ".html");
      link.href = url.href;
    });
  }

  function contentAfterLabel(element) {
    const clone = element.cloneNode(true);
    clone.querySelector("strong")?.remove();
    return clone.innerHTML.trim();
  }

  function parseDecks() {
    $("deck-source")
      .content.querySelectorAll("section[data-week]")
      .forEach((section) => {
        resolveLinks(section, section.dataset.url);
        const week = {
          number: Number(section.dataset.week),
          title: section.dataset.title.replace(/^\d+\s*·\s*/, ""),
          cards: [],
        };
        for (const heading of section.querySelectorAll("h2")) {
          const match = heading.textContent.match(/^Card (\d+)$/);
          const lab = heading.textContent.trim() === "Lab card";
          if (!match && !lab) continue;
          fragment.replaceChildren();
          for (
            let node = heading.nextElementSibling;
            node && node.tagName !== "H2";
            node = node.nextElementSibling
          ) {
            fragment.append(node.cloneNode(true));
          }
          const paragraphs = [...fragment.querySelectorAll(":scope > p")];
          const labelled = (label) =>
            paragraphs.find(
              (p) => p.querySelector("strong")?.textContent.trim() === label,
            );
          const quote = fragment.querySelector("blockquote");
          const title = fragment.querySelector("h3")?.textContent;
          if (!quote || !title) throw new Error("Missing lesson content");
          const card = {
            id: lab ? `lab-${week.number}` : `card-${match[1]}`,
            number: lab ? null : Number(match[1]),
            week,
            lab,
            title,
          };
          if (lab) {
            card.exercise = [...quote.querySelectorAll("p")]
              .slice(1)
              .map((p) => p.outerHTML)
              .join("");
            card.evidence = contentAfterLabel(labelled("Your evidence:"));
            card.caveat = contentAfterLabel(labelled("Keep in mind:"));
            card.fullExercise = paragraphs
              .flatMap((p) => [...p.querySelectorAll("a")])
              .find((a) => /full lab brief/i.test(a.textContent));
            card.sources = [];
          } else {
            card.hook = quote.querySelector("strong").textContent;
            card.idea = [...quote.querySelectorAll("p")]
              .filter(
                (p) =>
                  !p.querySelector("strong") &&
                  !/^\s*\{:\s/.test(p.textContent),
              )
              .map((p) => p.outerHTML)
              .join("");
            card.example = contentAfterLabel(labelled("Picture it:"));
            card.question = labelled(
              "Recall before revealing:",
            ).textContent.replace(/^Recall before revealing:\s*/, "");
            const answer = fragment.querySelector("details").cloneNode(true);
            answer.querySelector("summary").remove();
            card.answer = answer.innerHTML;
            card.exercise = contentAfterLabel(labelled("Try it:"));
            const links = paragraphs.flatMap((p) => [
              ...p.querySelectorAll("a"),
            ]);
            card.fullExercise = links.find((a) =>
              /Full exercise:/.test(a.textContent),
            );
            card.sources = links.filter(
              (a) =>
                a !== card.fullExercise &&
                !/Next card|Ready for the lab/.test(a.textContent),
            );
          }
          if (!card.fullExercise || !card.exercise)
            throw new Error("Missing exercise");
          week.cards.push(cards.length);
          cards.push(card);
        }
        weeks.push(week);
      });
    if (cards.length !== 20 || weeks.length !== 4)
      throw new Error("Expected four complete decks");
  }

  function readSaved() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
      saved = data && typeof data === "object" ? data : {};
      reviewed = new Set(
        Array.isArray(saved.reviewed)
          ? saved.reviewed.filter((id) => cards.some((card) => card.id === id))
          : [],
      );
    } catch (_) {
      storageAvailable = false;
    }
  }

  function persist() {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          card: cards[index].id,
          stage: stages[stage],
          reviewed: [...reviewed],
        }),
      );
    } catch (_) {
      storageAvailable = false;
    }
    $("storage-note").textContent = storageAvailable
      ? "Reviewed cards stay in this browser. Lab evidence stays in your learning plan."
      : "Progress is available for this visit only. Your browser is not allowing saved progress.";
  }

  function navigate(nextIndex, nextStage = 0) {
    const card = cards[nextIndex];
    if (!card) return;
    const value = `#${card.id}/${stages[card.lab ? 2 : nextStage]}`;
    if (location.hash === value) route();
    else location.hash = value;
  }

  function route() {
    const [id, step] = location.hash.slice(1).split("/");
    const found = cards.findIndex((card) => card.id === id);
    if (found < 0) {
      navigate(0);
      return;
    }
    index = found;
    stage = cards[index].lab ? 2 : Math.max(0, stages.indexOf(step));
    render();
    persist();
    // Rebuilt navigation buttons should never leave keyboard focus on the body.
    if (hasRendered) {
      $("lesson-title").focus({ preventScroll: true });
      if ($("lesson").getBoundingClientRect().top < 0)
        $("lesson").scrollIntoView({ block: "start" });
    }
    hasRendered = true;
  }

  function render() {
    const card = cards[index];
    $("weeks").replaceChildren(
      ...weeks.map((week) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "week-button";
        button.setAttribute("aria-current", String(card.week === week));
        const number = document.createElement("span");
        number.className = "week-number";
        number.textContent = `0${week.number}`;
        const text = document.createElement("span");
        const title = document.createElement("span");
        title.className = "week-name";
        title.textContent = week.title;
        const caption = document.createElement("span");
        caption.className = "week-caption";
        caption.textContent = `${week.cards.filter((i) => reviewed.has(cards[i].id)).length} of 5 reviewed`;
        text.append(title, caption);
        button.append(number, text);
        button.addEventListener("click", () => navigate(week.cards[0]));
        return button;
      }),
    );
    $("card-picker").replaceChildren(
      ...card.week.cards.map((i) => {
        const item = cards[i],
          button = document.createElement("button");
        button.type = "button";
        button.className = `card-dot${reviewed.has(item.id) ? " reviewed" : ""}`;
        button.textContent = item.lab
          ? "Lab"
          : String(item.number).padStart(2, "0");
        button.setAttribute(
          "aria-label",
          `${item.lab ? "Lab" : `Card ${item.number}`}: ${item.title}${reviewed.has(item.id) ? ", reviewed" : ""}`,
        );
        button.setAttribute("aria-current", String(i === index));
        button.addEventListener("click", () => navigate(i));
        return button;
      }),
    );
    $("deck-label").textContent =
      `Deck 0${card.week.number} / ${card.week.title}`;
    $("card-count").textContent =
      `${card.week.cards.indexOf(index) + 1} of 5 cards`;
    $("card-label").textContent = card.lab
      ? "Put it into practice"
      : `Lesson ${String(card.number).padStart(2, "0")}`;
    $("time-label").textContent = card.lab
      ? "60–90 min · development lab"
      : "3–5 min + exercise";
    $("lesson-title").textContent = card.title;
    $("steps").hidden = card.lab;
    $("steps").replaceChildren(
      ...stages.map((name, i) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "step";
        button.innerHTML = `<span class="step-number">0${i + 1}</span>${name[0].toUpperCase() + name.slice(1)}`;
        if (i === stage) button.setAttribute("aria-current", "step");
        button.addEventListener("click", () => navigate(index, i));
        return button;
      }),
    );
    for (const [i, name] of stages.entries())
      $(`${name}-panel`).hidden = stage !== i;
    if (!card.lab) {
      $("hook").textContent = card.hook;
      $("idea").innerHTML = card.idea;
      $("example").innerHTML = card.example;
      $("question").textContent = card.question;
      $("answer").innerHTML = card.answer;
    }
    $("answer").hidden = true;
    $("reveal").hidden = false;
    $("reveal").setAttribute("aria-expanded", "false");
    $("exercise").innerHTML = card.exercise;
    $("try-heading").textContent = card.lab
      ? "Your weekly lab"
      : "Make it real";
    $("lab-evidence").hidden = $("lab-caveat").hidden = !card.lab;
    if (card.lab) {
      $("lab-evidence").innerHTML =
        `<p class="eyebrow">Your evidence</p><div>${card.evidence}</div>`;
      $("lab-caveat").innerHTML = card.caveat;
    }
    $("review-status").textContent = reviewed.has(card.id)
      ? "✓ You have reviewed this card."
      : "";
    $("mark-reviewed").textContent = reviewed.has(card.id)
      ? "Continue →"
      : "Mark reviewed & continue →";
    if (index === cards.length - 1)
      $("mark-reviewed").textContent = reviewed.has(card.id)
        ? "Reviewed ✓"
        : "Mark reviewed ✓";
    $("mark-reviewed").disabled =
      index === cards.length - 1 && reviewed.has(card.id);
    $("full-exercise").href = card.fullExercise.href;
    $("source-links").replaceChildren(
      ...card.sources.map((link) => link.cloneNode(true)),
    );
    $("previous").disabled = index === 0 && stage === 0;
    $("next").disabled = index === cards.length - 1;
    $("next").textContent =
      !card.lab && stage < 2
        ? `${stages[stage + 1][0].toUpperCase() + stages[stage + 1].slice(1)} →`
        : "Next card →";
    $("position").textContent =
      `${card.lab ? `Lab ${card.week.number}` : `Card ${String(card.number).padStart(2, "0")}`} · ${card.lab ? "Practice" : `${stages[stage][0].toUpperCase() + stages[stage].slice(1)} · ${stage + 1}/3`}`;
    $("review-count").textContent = `${reviewed.size} / ${cards.length}`;
    $("review-progress").value = reviewed.size;
  }

  function advance(direction) {
    if (direction > 0) {
      if (!cards[index].lab && stage < 2) navigate(index, stage + 1);
      else navigate(index + 1);
    } else if (!cards[index].lab && stage > 0) navigate(index, stage - 1);
    else if (index > 0) navigate(index - 1, 2);
  }

  try {
    parseDecks();
    readSaved();
    $("app").hidden = false;
    $("loading").hidden = true;
    document.querySelector(".skip-link").addEventListener("click", (event) => {
      event.preventDefault();
      $("lesson-title").focus();
    });
    $("previous").addEventListener("click", () => advance(-1));
    $("next").addEventListener("click", () => advance(1));
    $("reveal").addEventListener("click", () => {
      $("answer").hidden = false;
      $("reveal").setAttribute("aria-expanded", "true");
      $("answer").setAttribute("tabindex", "-1");
      $("answer").focus();
      $("reveal").hidden = true;
    });
    $("mark-reviewed").addEventListener("click", () => {
      reviewed.add(cards[index].id);
      persist();
      if (index < cards.length - 1) navigate(index + 1);
      else render();
    });
    window.addEventListener("hashchange", route);
    window.addEventListener("keydown", (event) => {
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) ||
        event.target.isContentEditable
      )
        return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        advance(event.key === "ArrowRight" ? 1 : -1);
      }
    });
    let start = null;
    $("lesson").addEventListener(
      "touchstart",
      (event) => {
        start =
          event.touches.length === 1 && !event.target.closest("a,button")
            ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
            : null;
      },
      { passive: true },
    );
    $("lesson").addEventListener(
      "touchend",
      (event) => {
        if (!start) return;
        const dx = event.changedTouches[0].clientX - start.x,
          dy = event.changedTouches[0].clientY - start.y;
        start = null;
        if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 2)
          advance(dx < 0 ? 1 : -1);
      },
      { passive: true },
    );
    $("lesson").addEventListener(
      "touchcancel",
      () => {
        start = null;
      },
      { passive: true },
    );
    if (location.hash) route();
    else {
      const previous = cards.findIndex((card) => card.id === saved.card);
      navigate(Math.max(0, previous), Math.max(0, stages.indexOf(saved.stage)));
    }
  } catch (error) {
    $("app").hidden = true;
    $("loading").hidden = false;
    $("loading").replaceChildren(
      document.createTextNode("The slideshow could not load. "),
    );
    const link = document.querySelector(".notes-link").cloneNode(true);
    link.textContent = "Read the lesson cards in the notes instead.";
    $("loading").append(link);
    console.error("Learning deck:", error);
  }
})();
