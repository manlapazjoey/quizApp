/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Questions from '../../components/Questions';
import Results from '../../components/Results';

function Exam({ loadQuestions, questions, loading, hasError }) {
  const loadData = useCallback(async () => {
    await Promise.all([loadQuestions()]);
  }, [loadQuestions]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);

  const dispatch = useDispatch();

  const submitFinalAnswer = () => {
    dispatch({
      type: 'SUBMIT_ANSWERS_REQUEST',
      payload: allAnswers,
    });
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  const nextQuestion = () => {
    console.log(questionIndex);
    if (questionIndex < questions.length) {
      setQuestionIndex(x => x + 1);
      setAllAnswers(x => [
        ...x,
        { questionId: questions[questionIndex]._id, answers },
      ]);
      console.log(allAnswers);
      loadData();
    } else {
      setQuestionIndex(x => x + 1);
      setAllAnswers(x => [
        ...x,
        { questionId: questions[questionIndex]._id, answers },
      ]);
      loadData();
      submitFinalAnswer();
    }
  };

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  console.log(questions[questionIndex]);

  return (
    <div>
      <div data-testid="products-info" className="pt-8">
        {questionIndex < questions.length ? (
          <Questions
            questionNumber={questionIndex + 1}
            totalQuestion={questions.length}
            questionIndex={questionIndex}
            question={questions[questionIndex]}
            setAnswer={setAnswers}
            onContinueClick={nextQuestion}
          />
        ) : (
          <Results />
        )}
      </div>
    </div>
  );
}

Exam.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          value: PropTypes.string.isRequired,
        }),
      ),
      correctAnswer: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Exam;
