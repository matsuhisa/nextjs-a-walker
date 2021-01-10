import { NextApiRequest, NextApiResponse } from "next";
import { getAllYearMonths } from "../../../lib/post";

const handler = ( _req: NextApiRequest, res: NextApiResponse ) => {
  const yearAndMonths = getAllYearMonths().map( (path) => { return path.params } ).sort((a, b) => Number(b.year) - Number(a.year))
  res.status(200).json(yearAndMonths)
}

export default handler