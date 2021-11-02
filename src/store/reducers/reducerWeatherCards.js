import {
  WEATHER_CARD_ADD,
  UPDATED_WEATHER_CARD_ADD,
  CARD_REMOVE,
} from "../actionTypes/typesCurrentWeather";

const initialState = {
  cityList: [],
};

const reducerWeatherCards = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_CARD_ADD:
      return {
        ...state,
        cityList: state.cityList.concat(payload),
      };
    case UPDATED_WEATHER_CARD_ADD: {
      return {
        ...state,
        cityList: state.cityList.map((it) =>
          it.id === payload.id ? payload.updatedData : it
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
