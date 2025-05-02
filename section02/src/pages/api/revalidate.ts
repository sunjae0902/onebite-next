import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( // On-Demand Revalidation
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await res.revalidate('/');
        return res.json({revalidate: true}); // 인덱스 페이지 재생성!
    } catch (err) {
        console.log(err)
        res.status(500).send('Revalidation failed');
    }
}