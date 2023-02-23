/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */

import React from 'react';
import PropTypes from 'prop-types';

function Options({ choice, selected, setSelected, setAnswer }) {
  return (
    <label
      htmlFor={choice.id}
      className={`flex justify-start btn rounded py-4 px-8 text-left  ${
        selected === choice ? 'bg-green-400 ' : 'bg-gray-100 '
      }hover:bg-green-200 focus:ring-green-300`}
      style={{
        color: 'black',
        cursor: 'pointer',
        width: '300px',
      }}
    >
      {selected === choice ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-green-400 "
          style={{
            backgroundColor: '#EDE8E3',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            marginRight: '1rem',
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <p
          style={{
            backgroundColor: '#EDE8E3',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            marginRight: '1rem',
          }}
          className="text-center"
        >
          {choice.id}
        </p>
      )}

      {choice.value}
      <input
        type="radio"
        id={choice.id}
        name="choices"
        className="hidden"
        onChange={() => {
          console.log(choice.id), setSelected(choice), setAnswer(choice.id);
        }}
      />
    </label>
  );
}

Options.propTypes = {
  selected: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,
  choice: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Options;
