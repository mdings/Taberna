import { buildHomeMarkdown, getPublishedHome, getSiteBaseUrl, setLlmsHeaders } from "@/lib/llms-txt";

export default async function handler(req, res) {
  const home = await getPublishedHome();

  setLlmsHeaders(res, "text/markdown");
  res.status(200).send(buildHomeMarkdown({ baseUrl: getSiteBaseUrl(req), home }));
}
