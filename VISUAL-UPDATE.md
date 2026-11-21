# Visual refresh

This update refreshes the presentation's visual system while preserving the existing slide content and the cover's visual direction.

## What changed
- Rebuilt the presentation layout around a scrollable, viewport-height slide stage. Dense slides can now scroll instead of clipping content.
- Added responsive spacing and typography rules for wide desktop, laptop, tablet, and mobile breakpoints.
- Improved surface depth, card hierarchy, borders, gradients, contrast, and motion treatment.
- Added per-slide visual signatures through `slide--N` classes on the shared `SlideContainer`.
- Added dedicated cover styles and corrected the cover counter to `01 / 12`.
- Restored all 28 Jira request categories in the data source; the spectrum slide continues to show the 12 most frequent categories.

## Run locally
```bash
npm install
npm run dev
```

For a production build:
```bash
npm run build
```

The ZIP intentionally excludes `node_modules`, `.git`, and old build output. Install dependencies locally before running the project.
