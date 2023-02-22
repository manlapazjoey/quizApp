export const historyInitialValue = [];

export default (state = historyInitialValue, { type, payload }) => {
  switch (type) {
    case 'LOAD_HISTORY_SUCCESS':
      return payload;

    default:
      return state;
  }
};
