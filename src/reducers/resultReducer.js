export const resultInitialValue = [];

export default (state = resultInitialValue, { type, payload }) => {
  switch (type) {
    case 'LOAD_RESULT_SUCCESS':
      return { ...state, history: [payload] };
    case 'SUBMIT_ANSWER_SUCCESS':
      return { history: [...state.history, payload], latestSubmitted: payload };

    default:
      return state;
  }
};
