import { parseFeed } from "../../lib/parseFeed.js";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event);
  const feedUrl = runtimeConfig.rssFeed;

  const response: Response = await $fetch(feedUrl);
  const text = await response.text();
  const feed = parseFeed(text);

  return feed;
});
