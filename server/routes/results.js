import express from 'express';
import { ObjectId } from 'mongodb';
import verifyToken from '../middleware/verifyToken';
import Question from '../schema/questions';
import Answers from '../schema/results';
import db from '../connection';

const resultRouter = express.Router();

resultRouter.get('/results', verifyToken, async (req, res) => {
  try {
    const id = req.query.userId;
    const arrAns = await Answers.find({ userId: new ObjectId(id) }).sort({
      createAt: 'descending',
    });
    res.status(200).json(arrAns);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

resultRouter.post('/submitAnswer', verifyToken, async (req, res) => {
  try {
    const Questions = await Question.find({});
    const answers = req.body;
    let score = 0;
    const newArrofAns = answers.map(x => {
      const matchQuestion = Questions.find(y => y.id === x.questionId);
      if (matchQuestion.answer === x.answers) {
        score += matchQuestion.score;
        return { ...x, correct: true };
      }
      return { ...x, correct: false };
    });
    const newObj = new Answers({
      userId: req.userId,
      answers: newArrofAns,
      score,
    });
    await newObj.save();
    res.status(200).json(newObj);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

export default resultRouter;
