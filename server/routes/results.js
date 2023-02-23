const express = require('express');
const { ObjectId } = require('mongodb');
const verifyToken = require('../middleware/verifyToken');
const Question = require('../schema/questions');
const Answers = require('../schema/results');
// const db = require('../connection');

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

module.exports = resultRouter;
