// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFileSync } from "fs";
import path from "path";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const json = JSON.parse(
    readFileSync(`${jsonDirectory}/emotes.json`, "utf-8")
  );
  res.status(200).json(json);
}
