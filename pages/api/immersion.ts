// pages/api/immersion.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { word } = req.query;

  if (!word) {
    return res.status(400).json({ error: "Missing word query" });
  }

  try {
    const response = await fetch(
      `https://www.immersionkit.com/api/v1/lookup?keyword=${encodeURIComponent(
        word as string
      )}`
    );

    if (!response.ok) {
      throw new Error("ImmersionKit API error");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
