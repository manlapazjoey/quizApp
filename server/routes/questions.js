/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const Questions = require('../schema/questions');
const db = require('../connection');

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
module.exports = questionRouter;
