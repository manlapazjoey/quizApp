import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <section className="antialiased flex justify-center items-center h-full bg-gray-100">
        <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
                Manlapaz Exam
              </h1>
              <p className="text-justify text-gray-900">
                This web based system a system requirement for our training. It
                will test our skills and knowledge about react. This will be the
                final system for our training.
              </p>
              <Link
                role="button"
                to="auth"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-2 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
