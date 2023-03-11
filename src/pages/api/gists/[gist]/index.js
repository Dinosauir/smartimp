import axiosCacheCall from "@/utils/cacheCall";

export default async function handler(req, res) {
  const gist = req.query.gist;
  const cacheKey = gist;

  if (!gist) {
    res.status(400).json({ data: "Invalid request" });
    return;
  }

  const url = "https://api.github.com/gists/" + gist;

  const options = {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  res.status(200).json({ data: await axiosCacheCall(cacheKey, url, options) });
}
