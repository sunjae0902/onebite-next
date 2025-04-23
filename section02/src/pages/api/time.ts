import { NextApiResponse, NextApiRequest } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const date = new Date();
    res.json({ time: date.toLocaleDateString() }); // 응답 전달
}