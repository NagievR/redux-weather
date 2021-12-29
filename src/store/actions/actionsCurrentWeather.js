import fetchData from "../../api/fetchData";
import {
  WEATHER_CARD_ADD,
  UPDATED_WEATHER_CARD_ADD,
  CARD_REMOVE,
} from "../actionTypes/typesCurrentWeather";
import {
  weatherCardLoading,
  weatherCardLoaded,
  weatherCardUpdating,
  weatherCardUpdated,
} from "./actionsLoading";

const generateURL = (cityName) =>
  `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

const addWeatherCard = (weatherCard) => ({
  type: WEATHER_CARD_ADD,
  payload: weatherCard,
});

const addUpdatedWeatherCard = (updatedData) => ({
  type: UPDATED_WEATHER_CARD_ADD,
  payload: {
    id: updatedData.id,
    updatedData,
  },
});

export const fetchWeatherCard = (cityName) => {
  const URL = generateURL(cityName);

  return async (dispatch, getState) => {
    dispatch(weatherCardLoading());

    const data = await fetchData(URL);
    data.updatedAt = Date.now();

    const isAlreadyAdded = getState().currentWeather.cityList.find(
      (it) => it.name === data.name
    );
    if (isAlreadyAdded) {
      alert(`City ${cityName} already added!`);
      return;
    }

    dispatch(weatherCardLoaded());
    dispatch(addWeatherCard(data));
  };
};

export const updateWeatherCard = (cityName, id) => {
  const URL = generateURL(cityName);

  return async (dispatch) => {
    dispatch(weatherCardUpdating(id));

    const updatedData = await fetchData(URL);
    updatedData.updatedAt = Date.now();

    dispatch(addUpdatedWeatherCard(updatedData));
    dispatch(weatherCardUpdated(id));
  };
};

export const removeCard = (id) => ({
  type: CARD_REMOVE,
  payload: { id },
});
