import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Questions from '../../components/Questions';

function Exam({
  loadQuestions,
  questions,
  // questionSpecific,
  loading,
  hasError,
}) {
  const loadData = useCallback(async () => {
    await Promise.all([loadQuestions()]);
  }, [loadQuestions]);

  const [questionIndex, setQuestionIndex] = useState(0);
  // const [answers, setAnswers] = useState([]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const nextQuestion = () => {
    if (questionIndex < questions.length) {
      setQuestionIndex(x => x + 1);
      loadData();
    }
  };

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  return (
    <div>
      <div data-testid="products-info" className="pt-8">
        {questions && (
          <Questions
            questionNumber={questionIndex + 1}
            totalQuestion={questions.length}
            questionIndex={questionIndex}
            question={questions[questionIndex]}
            onContinueClick={nextQuestion}
          />
        )}
        {/* {questions.map((data, index) => (
          <Questions
            key={data.id}
            questionNumber={index + 1}
            totalQuestion={questions.length}
            questionIndex={questionIndex}
            question={data}
            // questionSpecific={questions[questionIndex]}
            onContinueClick={continueClick}
          />
        ))} */}
        {/* <Questions
          questionNumber={questionIndex + 1}
          totalQuestion={questionSpecific[questionIndex].length}
          questionIndex={questionIndex}
          questionSpecific={questionSpecific[questionIndex]}
          onContinueClick={continueClick}
        /> */}
      </div>
    </div>
  );
}

Exam.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
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
  // questionSpecific: PropTypes.exact({
  //   id: PropTypes.number.isRequired,
  //   question: PropTypes.string.isRequired,
  //   options: PropTypes.arrayOf(
  //     PropTypes.exact({
  //       id: PropTypes.number.isRequired,
  //       value: PropTypes.string.isRequired,
  //     }),
  //   ),
  //   correctAnswer: PropTypes.number.isRequired,
  //   type: PropTypes.string.isRequired,
  //   weight: PropTypes.number.isRequired,
  // }).isRequired,
  loading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Exam;
