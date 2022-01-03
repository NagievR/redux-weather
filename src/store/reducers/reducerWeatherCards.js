import {
  WEATHER_CARDS_CONCAT,
  WEATHER_CARD_UPDATED_ADD,
  CARD_REMOVE,
} from "../actionTypes/typesCurrentWeather";

const initialState = {
  cityList: [],
};

const reducerWeatherCards = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_CARDS_CONCAT:
      return {
        ...state,
        cityList: state.cityList.concat(payload),
      };
    case WEATHER_CARD_UPDATED_ADD: {
      return {
        ...state,
        cityList: state.cityList.map((it) =>
          it.id === payload.id ? payload.data : it
        ),
      };
    }
    case CARD_REMOVE: {
      return {
        ...state,
        cityList: state.cityList.filter((it) => it.id !== payload.id),
      };
    }
    default:
      return state;
  }
};

export default reducerWeatherCards;
