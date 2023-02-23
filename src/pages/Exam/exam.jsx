/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Questions from '../../components/Questions';
import Results from '../../components/Results';

function Exam({
  loadQuestions,
  questions,
  loading,
  hasError,
  // answers,
  // questionIndex,
  // allAnswers,
  // setQuestionIndex,
  // setAnswers,
  // setAllAnswers,
}) {
  const loadData = useCallback(async () => {
    await Promise.all([loadQuestions()]);
  }, [loadQuestions]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionCounter, setQuestionCount] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);

  const dispatch = useDispatch();

  const submitFinalAnswer = () => {
    console.log(allAnswers);
    dispatch({
      type: 'SUBMIT_ANSWERS_REQUEST',
      payload: allAnswers,
    });
  };

  const nextQuestion = () => {
    console.log(questionIndex);
    console.log(questionCounter);
    console.log(questions.length);
    if (questionCounter < questions.length) {
      setAllAnswers(x => [
        ...x,
        { questionId: questions[questionIndex]._id, answers },
      ]);
      console.log(questions[questionIndex]._id);
      console.log(answers);
      setQuestionIndex(x => x + 1);
      setQuestionCount(x => x + 1);

      console.log('if');
      console.log(allAnswers);
      loadData();
    } else {
      setAllAnswers(x => [
        ...x,
        { questionId: questions[questionIndex]._id, answers },
      ]);
      console.log('else');
      console.log(allAnswers);
      // submitFinalAnswer();
    }
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

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
            submitFinalAnswer={submitFinalAnswer}
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
  // answers: PropTypes.arrayOf(
  //   PropTypes.exact({
  //     questionId: PropTypes.string.isRequired,
  //     answers: PropTypes.number.isRequired,
  //   }),
  // ),
  // allAnswers: PropTypes.arrayOf(
  //   PropTypes.exact({
  //     questionId: PropTypes.string.isRequired,
  //     answers: PropTypes.number.isRequired,
  //   }),
  // ),
  // questionIndex: PropTypes.number,
  // setQuestionIndex: PropTypes.func.isRequired,
  // setAnswers: PropTypes.func.isRequired,
  // setAllAnswers: PropTypes.func.isRequired,
};

// Exam.defaultProps = {
//   answers: null,
//   allAnswers: null,
//   questionIndex: 0,
// };

export default Exam;
