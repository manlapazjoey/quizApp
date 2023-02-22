import React from 'react';
import PropTypes from 'prop-types';

const testFunctiion = data => {
  switch (data) {
    case 0:
      return 'A';

    case 1:
      return 'B';

    case 2:
      return 'C';

    case 3:
      return 'D';

    default:
      return data;
  }
};

function Question({
  question,
  // questionSpecific,
  questionNumber,
  totalQuestion,
  questionIndex,
  isLoading,
  onContinueClick,
}) {
  return (
    <div key={question.id}>
      <div className="px-2 py-2 pb-8 lg:px-8 lg:py-4">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-3">
            <div className="justify-self-center">
              <div className="w-full bg-gray-500 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{
                    width: `${(questionNumber / totalQuestion) * 100}%`,
                  }}
                />
                {questionNumber} / {totalQuestion}
              </div>
            </div>
            <div className="justify-self-center">Manlapaz Exam Quiz</div>
            <div className="justify-self-center">Header 3</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center pt-16">
              <div className="border-4 border-green-500">
                <p className="text-4xl font-bold p-4">{question.question}</p>
              </div>
            </div>
            <div className="flex justify-center pt-16">
              <div className="flex flex-col gap-2">
                {question.options.map((data, index) => (
                  <div
                    key={data.id}
                    className="bg-white rounded-md py-2 px-4 pr-6"
                  >
                    <div className="flex flex-row gap-4">
                      <p className="text-lg font-bold mr-6 bg-gray-200 p-2 px-4 rounded-full">
                        {testFunctiion(index)}
                      </p>
                      <div className="grid content-center">
                        <p className="text-lg font-bold">{data.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-2 gap-4 h-16 my-4">
          <div className="flex justify-center">
            <div className="grid content-center">
              <div className="w-full bg-gray-500 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{
                    width: `${(questionNumber / totalQuestion) * 100}%`,
                  }}
                />
                <p>
                  {questionNumber} / {totalQuestion}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid content-center">
              <button
                type="button"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-2 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
                onClick={() => onContinueClick(questionNumber)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.exact({
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
  }).isRequired,
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
  questionNumber: PropTypes.number.isRequired,
  totalQuestion: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Question;
