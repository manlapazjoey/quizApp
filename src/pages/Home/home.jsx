import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Product from '../../components/Product';
import { Link } from 'react-router-dom';
import Questions from '../../components/Questions';
import History from '../../components/History';

function Home({
  loadProducts,
  loadCart,
  loadQuestions,
  loadHistory,
  questions,
  history,
  // questionSpecific,
  user,
  loading,
  hasError,
}) {
  const loadData = useCallback(async () => {
    await Promise.all([
      loadProducts(),
      loadCart(),
      loadQuestions(),
      loadHistory(),
    ]);
  }, [loadProducts, loadCart, loadQuestions, loadHistory]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  let questionIndex = 0;

  const continueClick = data => {
    if (questions.length <= data) {
      questionIndex += 1;
    }
  };

  return (
    <div className="h-screen bg-gray-200">
      <div data-testid="products-info">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center lg:py-0">
            <div className="max-w-md">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
                  Welcome {user.user.name}
                </h1>
                <p className="text-justify text-gray-900">
                  This web based system a system requirement for our training.
                  It will test our skills and knowledge about react. This will
                  be the final system for our training.
                </p>
                <Link
                  role="button"
                  to="exam"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-2 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
                >
                  Take Exam
                </Link>
              </div>
            </div>
          </div>
          <h1
            className="text-center text-lg font-medium"
            style={{ textTransform: 'uppercase' }}
          >
            Your Previous Attempts
          </h1>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 px-6 pb-8"
            style={{ borderTop: '1px solid black', paddingTop: '1rem' }}
          >
            {history && history.length ? (
              history.map(x => <History details={x} />)
            ) : (
              <p className="text-xs font-light italic text-gray-400 ">
                No history available !
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  loadCart: PropTypes.func.isRequired,
  loadQuestions: PropTypes.func.isRequired,
  loadHistory: PropTypes.func.isRequired,
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
  history: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      attemptId: PropTypes.number.isRequired,
      answers: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          value: PropTypes.string.isRequired,
        }),
      ),
      score: PropTypes.number.isRequired,
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
  user: PropTypes.shape({}),
};

Home.defaultProps = {
  user: null,
};

export default Home;
