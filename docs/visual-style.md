# Shared visual style

The learning slides establish the Good Vibes visual language: system sans-serif,
paper background, dark green ink, lime accents, rounded controls and pastel cards.

- `assets/css/design-tokens.css` owns the shared palette, typeface, radii and spacing.
- `assets/css/learning-deck.css` imports the tokens using a relative CSS URL, so
  slide layouts and their existing visualisation consumers share those values.
- Just the Docs loads the tokens and `wiki-theme.css` through its supported
  `_includes/head_custom.html` hook. It does not load the slide layout rules.
- `_includes/title.html` supplies the shared brand mark; `header_custom.html`
  links the wiki to the visualisation hub and learning slides. The theme still
  supplies the navigation tree, breadcrumbs, mobile menu and search.

Change shared values in the token file. Keep wiki-specific selectors in
`wiki-theme.css`, and preserve the slide palettes when adjusting callouts.
Standalone maps and tool-specific palettes can retain their own semantic colours.

## Checking changes

Use Ruby 3.3 (the deployment version), then run:

```sh
bundle install
bundle exec jekyll build --baseurl /good-vibes
```

Preview the output under `/good-vibes/`, and check the home page, a nested guide,
a lesson note, a company profile, `/learn/` and `/visualisations/` at desktop
and phone widths. Check the mobile menu, search results, active nested navigation,
keyboard focus, horizontally scrollable tables and next/previous slide controls.
The upstream theme currently emits Sass deprecation warnings during compilation.
