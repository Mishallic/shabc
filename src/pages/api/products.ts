// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { api, attachCookie } from "@/lib/api-client";

type Data = {
	name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	console.log(req.url);

}
