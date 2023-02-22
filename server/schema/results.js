const mongoose = require('mongoose');

const ResultsScheme = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'result' },
    answers: { type: Array, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: true },
);

const Results = mongoose.model('result', ResultsScheme);
module.exports = Results;
