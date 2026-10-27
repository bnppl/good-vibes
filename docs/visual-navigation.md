# Finding visualisations

`/visualisations/` is the site-wide directory. Its 18 destinations cover combined tooling, comparisons and the original approach map, dedicated subway maps, seven engineer perspectives, learning slides and the two study archives. Individual profile decks remain reachable through their study collections.

The canonical catalogue is `_data/visual_navigation.yml`. Both the searchable hub and `_includes/visual-navigation.html` render that file. Add a destination there to update both menus together.

The shared “All visualisations / Switch view” bar is included once in all seven standalone layouts, plus the atlas and both combined subway pages. This includes main and profile slideshows. Ordinary wiki pages expose the hub through the theme sidebar; the homepage and engineer/company archives also have direct buttons. The older engineer gallery stays available.

The menu groups views, marks the current destination, preserves current-page query/hash state, and supports keyboard dismissal and outside/focus dismissal. It works as native links/details without JavaScript. On narrow screens it becomes a single vertically scrolling column; compact contextual header menus are replaced by the shared bar. Pocket map controls and wide/mobile state transfer remain independent.

The directory filters by title, description, keywords and collection. Filter state is encoded in its own URL; comparison selections and slideshow state are not changed by opening the shared menu.

Validation performed on 27 October 2026:

- All 18 unique destinations resolve to existing source pages; every standalone layout/page includes the navigation exactly once.
- All standalone templates render with actual frontmatter, navigation data and Jekyll-style includes in the local LiquidJS preview.
- JavaScript syntax and existing pipeline evidence integrity checks pass.
- Browser checks cover the Stripe/Monzo/Shopify comparison retaining three selections and its query when opening/closing the menu, current-view marking, hub search/filter/reset and direct navigation to the pocket map.
- Phone fixtures at 320px and 390px show no page-level horizontal overflow. The expanded menu scrolls vertically, with no horizontal panel overflow.
- The main slideshow still loads real cards after the shared header is added.

GitHub Actions supplies the full Jekyll build check at publication. New source content and saved-card identifiers are unchanged by this navigation work.
