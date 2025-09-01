import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (!process.env.IMMERSIONKIT_KEY) {
    return res.status(500).json({ error: "Missing IMMERSIONKIT_KEY" });
  }

  try {
    const response = await fetch("https://api.immersionkit.com/look_up_dictionary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.IMMERSIONKIT_KEY}`
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "API error", details: e });
  }
}
