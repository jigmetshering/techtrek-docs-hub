# Add the supplied project screenshots

## What will change
- Add the three gameplay screenshots to the Game page, replacing the older two-image build gallery with a clearer, captioned gallery.
- Add the three Godot editor screenshots to the Documentation page beside the architecture and art-pipeline material.
- Keep the existing pine-teal editorial style, sharp borders, and simple navigation.
- Store the supplied images with the project’s managed asset system rather than linking to the external image host.

## Technical details
- Import managed asset pointers and use their URLs in the relevant route data.
- Give every image a specific caption and accessible description based on what it shows.
- Preserve the small editor-strip capture at its natural role as a supporting interface detail rather than stretching it into a large image.
- Verify the pages render correctly at desktop and mobile widths and confirm the latest build is successful.
