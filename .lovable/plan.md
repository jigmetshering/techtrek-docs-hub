# Add every repository image to the website

## What will change
- Add the six complete character sprite sheets from the repository to the Documentation page’s Art & assets section.
- Present Tashi, Kinley, Aum Jomo, Tshomen, the Taktsang monk, and Dema in a clear gallery with concise captions.
- Keep the existing cropped character portraits on the Home and Game pages, where they work better at small sizes.
- Skip the duplicate copies under `docs/images`, because they are byte-for-byte copies of the same six images.
- Preserve the current warm editorial styling, sharp borders, and simple navigation.

## Technical details
- Store each full sprite sheet with the project’s managed asset system and import its asset pointer.
- Render sprite art without smoothing so the pixel work stays crisp.
- Verify the Art & assets tab and the rest of the page at desktop and mobile widths, then confirm the latest build succeeds.
