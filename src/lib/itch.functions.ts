import { createServerFn } from "@tanstack/react-start";

const ITCH_PAGE = "https://wangyatt.itch.io/the-tapestry-of-monyul";

let cached: { url: string | null; at: number } | null = null;
const TTL_MS = 5 * 60 * 1000;

/**
 * Resolves the current itch.io hosting URL for the game's browser build.
 * itch.io issues a fresh play token per page view, so we read the page and
 * extract the stable itch.zone frame URL instead of the session-bound one.
 */
export const getGameEmbedUrl = createServerFn({ method: "GET" }).handler(async () => {
  if (cached && Date.now() - cached.at < TTL_MS) return cached.url;

  try {
    const res = await fetch(ITCH_PAGE, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
        Accept: "text/html",
      },
    });
    if (!res.ok) throw new Error(`itch.io responded ${res.status}`);
    const html = await res.text();
    const match = html.match(
      /https:\/\/html-classic\.itch\.zone\/html\/\d+\/[^"'&<>]*index\.html(?:\?v=\d+)?/,
    );
    const url = match ? match[0].replaceAll(" ", "%20") : null;
    cached = { url, at: Date.now() };
    return url;
  } catch {
    return null;
  }
});
