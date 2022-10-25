// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetch("http://61.73.115.3:90/food/recommend/random", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  res.json({ ...result });
}
