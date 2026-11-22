import { buildLlmsTxt, getPublishedDetailPages, getPublishedHome, getSiteBaseUrl, setLlmsHeaders } from "@/lib/llms-txt";

export default async function handler(req, res) {
  const [home, detailPages] = await Promise.all([
    getPublishedHome(),
    getPublishedDetailPages(),
  ]);

  setLlmsHeaders(res);
  res.status(200).send(buildLlmsTxt({ baseUrl: getSiteBaseUrl(req), home, detailPages }));
}
