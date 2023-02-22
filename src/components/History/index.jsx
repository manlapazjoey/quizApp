import React from 'react';

function History() {
  return (
    <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
          Attempt #1
        </h1>
        <p className="text-lg text-gray-900">Score : 53</p>
        <div className="flex justify-between">
          <p className="text-xs">
            Time:
            <br /> 8:00 am
          </p>
          <p className="text-xs">
            Date:
            <br /> Feb 12, 2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
