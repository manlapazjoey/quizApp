export const questionsInitialValue = [];

export default (state = questionsInitialValue, { type, payload }) => {
  switch (type) {
    case 'LOAD_QUESTIONS_SUCCESS':
      return payload;

    default:
      return state;
  }
};
