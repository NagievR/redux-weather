import { WEATHER_CARD_ADD } from "../actionTypes/typesCurrentWeather";

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
    default:
      return state;
  }
};

export default reducerCurrentWeather;
