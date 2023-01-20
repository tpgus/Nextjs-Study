import { NextApiRequest, NextApiResponse } from "next";
import { buildFeedbackPath, extractFeedback } from "./index";

interface FeedbackItem {
  id: string;
  email: string;
  text: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath) as FeedbackItem[];

  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res.status(200).json({ items: selectedFeedback });
};

export default handler;
