// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { postAnswer } from '@/services/answer';
import { nanoid } from 'nanoid';

function genAnswerInfo(reqBody: any) {
    // generate identifier for each survey filler
    const identifier = nanoid(10);
    const answerList: any[] = [];
    Object.keys(reqBody).forEach((key) => {
        if (key === "questionId") {
            return;
        }
        answerList.push({
            componentId: key,
            value: reqBody[key],
        })
    })
    return {
        questionId: reqBody.questionId,
        answerList,
        identifier
    }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(200).json({ errno: -1, msg: "Method错误" });
    }
    const answerList = genAnswerInfo(req.body);

    try {
        const postRes = await postAnswer(answerList);
        if (postRes.errno === 0) {
            //成功
            res.writeHead(302, { Location: 'https://mysurvey.wwwyxxx.uk/question/success' });
            res.end();
        } else {
            res.writeHead(302, { Location: 'https://mysurvey.wwwyxxx.uk/question/fail' });
            res.end();
        }
        
    } catch (err) {
        console.log(err);
    }
}
