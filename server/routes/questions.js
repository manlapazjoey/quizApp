import express from 'express';
import verifyToken from '../middleware/verifyToken';
import Questions from '../schema/questions';
import db from '../connection';

const questionRouter = express.Router();
questionRouter.get('/', async (req, res) => {
  try {
    const response = await Questions.find({});
    if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});
export default questionRouter;
