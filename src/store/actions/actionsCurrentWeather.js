import fetcher from "../../api/fetcher";
import pushToLocalStorage from "../../helpers/pushToLocalStorage";
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

const getCurrentWeather = async (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const data = await fetcher(URL);
  data.updatedAt = Date.now();
  return data;
};

export const fetchWeatherCard = (cityName) => {
  return async (dispatch, getState) => {
    dispatch(weatherCardLoading());
    const data = await getCurrentWeather(cityName);
    dispatch(weatherCardLoaded());

    const isAlreadyAdded = getState().currentWeather.cityList.find(
      (it) => it.name === data.name
    );
    if (isAlreadyAdded) {
      return alert(`City ${cityName} already added!`);
    }

    pushToLocalStorage("cityNames", data.name);
    dispatch(addWeatherCard(data));
  };
};

export const bulkFetchWeatherCard = (cityNames) => {
  return async (dispatch, getState) => {
    if (!Array.isArray(cityNames)) {
      throw new Error('"cityNames" must be an array');
    }
    const dataList = await Promise.all(
      cityNames.map(async (name) => await getCurrentWeather(name))
    );
    console.log("data: ", dataList);
  };
};

export const updateWeatherCard = (cityName, id) => {
  return async (dispatch) => {
    dispatch(weatherCardUpdating(id));
    const updatedData = await getCurrentWeather(cityName);
    dispatch(weatherCardUpdated(id));
    dispatch(addUpdatedWeatherCard(updatedData));
  };
};

export const removeCard = (id) => ({
  type: CARD_REMOVE,
  payload: { id },
});
