# Pipeline atlas maintenance

The atlas indexes the existing 20 engineer and 20 company knowledge bases. It does not add an invented universal workflow or infer a private stack from a product announcement.

- `build_catalog.py` contains reviewed stage/type/item mappings. Most observations join to the exact profile dimension and retain its claim, original source, source register, evidence relationship, publication/revision date, practice period, inspection date and qualification.
- Named tools sometimes come from the same profile’s `tools_summary` or tools chapter rather than the shortened comparison sentence. The linked source and cached context stay attached. Stage placement and the common item titles are editorial classifications.
- Additional explicit records cover the public Agent Skills, Rodney, Showboat and Beads artifacts. Mutable/undated documents do not acquire a publication date from their inspection date. Publishing an artifact does not establish daily use.
- Hypothetical exercises, pre-window background material and AI-product evaluation are excluded. Karpathy’s concrete autoresearch ML experiment is excluded from this software-product development index. Chip Huyen and CircleCI lack an eligible detailed practice in the reviewed cache. Their coverage entries explain the gap; absence is not opposition.
- Repeated evidence associations can share a source. The UI calls them **attributions**, not independent studies or unique sources. A tool appearing at several stages is indexed separately for that usage.
- “Reported use only” includes first-person and named team/company reports. Published artifacts and policy/recommendations have separate filter categories. None claims independent runtime validation.

Regenerate and validate from any directory (Python with PyYAML):

```sh
python docs/pipeline/build_catalog.py
python docs/pipeline/validate_catalog.py
node --check assets/js/pipeline.js
```

Run the commands from the repository root with the paths above. No extra production build dependency is introduced: GitHub Pages serves the generated JSON and the existing Jekyll site.

The UI supports stage navigation, usage-type chips, full-text search, one profile or cohort, evidence relationship, expandable evidence, a coverage list and URL-persisted filters. Search and profile selection open all stages; selecting a stage then narrows the results. The complete Markdown catalogue remains available without JavaScript.

Validation on 27 October 2026: all 40 profile joins, 130 item records and 199 evidence associations passed local source/claim anchor checks; JavaScript syntax passed. Browser checks exercised stage navigation, expandable claims, global MCP search, company/evidence filtering, empty states and copy-view links. A 390-pixel iframe check verified responsive layout. The preview renders the standalone page with GitHub Pages base paths; it is not a local full Jekyll build. Primary URLs are preserved from the cache rather than refetched in this indexing pass.
