const initialState = {
  isAddingLoading: false,
  updatingCardId: null,
  // loadingCardId: null
};

const reducerLoading = (state = initialState, { type, payload }) => {
  switch (type) {
    case "value":
      break;

    default:
      return state;
  }
};

export default reducerLoading;
