import { WEATHER_CARD_ADD } from "../actionTypes/typesCurrentWeather";

const addWeatherCard = (weatherCard) => ({
  type: WEATHER_CARD_ADD,
  payload: weatherCard,
});

export const fetchCurrentWeather = (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  return async (dispatch) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      dispatch(addWeatherCard(data));
    } catch (error) {
      console.warn("Cant fetch current weather: ", error);
    }
  };
};
