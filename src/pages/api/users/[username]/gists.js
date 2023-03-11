import axiosCacheCall from "@/utils/cacheCall";

export default async function handler(req, res) {
  const username = req.query.username;
  const cacheKey = username + "_gists2";

  if (!username) {
    res.status(400).json({ data: "Invalid request" });
    return;
  }

  const url = process.env.GIT_API_URL + "/users/" + username + "/gists";
  const options = {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  res.status(200).json({ data: await axiosCacheCall(cacheKey, url, options) });
}
