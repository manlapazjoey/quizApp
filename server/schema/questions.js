const mongoose = require('mongoose');

const QuestionScheme = new mongoose.Schema({
  question: { type: String, required: true },
  type: { type: String, required: true },
  weight: { type: Number, required: true },
  correctAnswer: { type: Number, required: true },
  options: { type: Array, required: true },
});

const Questions = mongoose.model('question', QuestionScheme);
module.exports = Questions;
