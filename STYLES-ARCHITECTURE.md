# Styles architecture

The active presentation app is the project root (`creative/`). The nested
`creative-team-presentation/` directory is a separate starter project and is
not imported by the active app.

## CSS loading order

`src/main.jsx` loads the shared styles before importing `App`:

1. `styles/tailwind.css` — Tailwind layers and utilities.
2. `styles/fonts.css` — IranYekanX font-face only.
3. `styles/theme.css` — shared design tokens, including responsive token values.
4. `styles/presentation.css` — document reset, application shell, slide frame,
   shared typography, navigation, progress, and shared accessibility behavior.
5. Each slide module imports its own `styles/slides/slide-XX.css` after the
   shared foundation has loaded.

## Ownership rules

- `theme.css` is the only source of shared CSS custom properties.
- `presentation.css` must not contain slide-specific selectors or visual
  treatments for `.slide--N`.
- Every slide stylesheet is scoped to its own `.slide--N` root.
- Slide-specific responsive behavior stays in that slide's stylesheet.
- Shared responsive spacing and width tokens stay in `theme.css`.
- Shared reduced-motion behavior is defined once in `presentation.css`.
- Do not add inline layout styles to navigation; `presentation.css` owns its
  grid layout.

## Slide root contract

Slides 1–12 use the `.slide` and `.slide--N` classes. Slides 2–12 get these
classes from `SlideContainer`; the cover adds them directly to its section.
