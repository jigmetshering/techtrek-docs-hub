import { createServerFn } from "@tanstack/react-start";

/** Official itch.io embed URL for the game's browser build (upload id 19538296). */
const EMBED_URL = "https://itch.io/embed-upload/19538296";

/**
 * Returns the itch.io embed URL for the game's browser build.
 * Kept as a server function so the embed target can be swapped or made
 * dynamic later without touching the page component.
 */
export const getGameEmbedUrl = createServerFn({ method: "GET" }).handler(async () => {
  return EMBED_URL;
});
