import questionsData from "../../mockData/questions";

export default function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.qId) {
      // get single question
      res
        .status(200)
        .json(questionsData.find((question) => question.id == req.query.qId));
    } else {
      // get all questions
      res.status(200).json(questionsData);
    }
  }
}
