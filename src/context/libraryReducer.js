export const LibraryReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      return { ...state, quantity: state.quantity + 1 };
    case "RESET_QUANTITY":
      return { ...state, quantity: 0 };
    default:
      return state;
  }
};
