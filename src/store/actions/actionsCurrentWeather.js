import { WEATHER_CARD_ADD } from "../actionTypes/typesCurrentWeather";
import { weatherCardLoading, weatherCardLoaded } from "./actionsLoading";

const addWeatherCard = (weatherCard) => ({
  type: WEATHER_CARD_ADD,
  payload: weatherCard,
});

export const fetchWeatherCard = (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  return async (dispatch, getState) => {
    try {
      dispatch(weatherCardLoading());
      
      const res = await fetch(URL);

      if (!res.ok) {
        throw res;
      }

      const data = await res.json();

      const alreadyAdded = getState().currentWeather.cityList.find(
        (it) => it.name === data.name
      );

      if (alreadyAdded) {
        alert(`City ${cityName} already added!`);
        return;
      }

      dispatch(addWeatherCard(data));
    } catch (error) {

      console.warn("Cant fetch current weather: ");
      console.warn(error)
      
    } finally {
      dispatch(weatherCardLoaded());
    }
  };
};
