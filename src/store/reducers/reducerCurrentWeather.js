import {
  WEATHER_CARD_ADD,
  UPDATED_WEATHER_CARD_ADD,
} from "../actionTypes/typesCurrentWeather";

const initialState = {
  cityList: [],
};

const reducerCurrentWeather = (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};

export default reducerCurrentWeather;
