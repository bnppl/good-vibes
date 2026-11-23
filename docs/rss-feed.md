# Important-update RSS feed

Subscribe at https://bnppl.github.io/good-vibes/feed.xml.

`feed.xml` is a curated RSS 2.0 document published by the existing Jekyll/GitHub Pages build. It uses absolute public URLs and `layout: null`; keep its YAML frontmatter. No extra plugins or external feed service are needed.

## During every content refresh

Review the actual content diff. Add an item only for an important new finding, a material correction, a useful new topic/tool/skill, or a substantial change to an engineer/company practice or recommendation. Skip formatting, metadata-only edits, routine checks, duplicates and minor link repairs. No important change means no new item and no date change.

Insert new items newest first, in the same commit as the corresponding content changes. Group related changes into one concise entry. Each item must have:

- A specific title and a plain-text description explaining what changed and why it matters.
- An absolute `link` to the most relevant changed public page or anchor.
- Absolute source URLs in the description where useful; escape all XML text and attribute values (especially ampersands and angle brackets).
- A UTC RFC 822 `pubDate` matching the actual publication time.
- A unique, permanent `guid isPermaLink="false"`, e.g. `good-vibes:2026-11-18:agent-evaluation-correction`.
- An optional category.

Keep existing GUIDs and publication dates stable, including when fixing an entry. Update channel `lastBuildDate` only when the feed changes. Retain the latest 100 entries. Never announce an unapplied proposal as a published update.

After building, parse `_site/feed.xml` as XML and check required RSS fields, unique GUIDs, valid dates, newest-first order and absolute links. Check that important changed-page links resolve in the built site. The public feed changes only after a successful Pages deployment.

## Separate video feed

`/videos.xml` announces newly curated YouTube videos, generated from `_data/videos.json`. Follow `docs/videos.md` for selection, dates, deduplication and validation. Keep this important-update feed editorial: announce the video collection's launch here, but do not duplicate every subsequent video addition.
