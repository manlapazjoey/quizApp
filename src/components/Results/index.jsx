import React from 'react';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <div>
        <div className="px-2 pt-3 pb-5 lg:px-16">
          <div>
            <h1 className="mb-2 text-xl text-center font-bold lg:text-2xl">
              Congratulations!
            </h1>
            <p className="text-center text-gray-500 text-base pb-2 mb-4 lg:pb-6 lg:text-lg">
              You have successfully finished the quiz app.
            </p>
          </div>
          <div className="mt-5 w-full bg-white rounded-lg border border-gray-200 py-2 lg:py-6">
            <div className="grid grid-cols-5">
              <p className="text-center text-gray-500 text-base pb-2 mb-2 lg:text-lg">
                Icon
              </p>
              <p className="text-center col-span-3 text-gray-500 text-base pb-2 mb-2 lg:text-lg">
                Score Gained
              </p>
              <p className="text-center text-gray-500 text-base pb-2 mb-2 lg:text-lg">
                10
              </p>
              <p className="text-center text-gray-500 text-base pb-2 mb-2 lg:text-lg">
                Icon
              </p>
              <p className="text-center col-span-3 text-gray-500 text-base pb-2 mb-2 lg:text-lg">
                Correct Predictions
              </p>
              <p className="text-center text-gray-500 text-base pb-2 mb-2 lg:text-lg">
                5
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            role="button"
            to="/dashboard"
            className="w-min whitespace-nowrap  rounded-md border border-transparent bg-green-500 py-2 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Results;
