import {
  WEATHER_CARD_LOADED,
  WEATHER_CARD_LOADING,
  WEATHER_CARD_UPDATED,
  WEATHER_CARD_UPDATING,
} from "../actionTypes/typesLoading";

const initialState = {
  isAddingLoading: false,
  updatingCardsIds: [],
};

const reducerLoading = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_CARD_LOADING:
      return {
        ...state,
        isAddingLoading: true,
      };
    case WEATHER_CARD_LOADED:
      return {
        ...state,
        isAddingLoading: false,
      };
    case WEATHER_CARD_UPDATING:
      return {
        ...state,
        updatingCardsIds: state.updatingCardsIds.concat(payload.id),
      };
    case WEATHER_CARD_UPDATED:
      return {
        ...state,
        updatingCardsIds: state.updatingCardsIds.filter(
          (id) => id !== payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducerLoading;
