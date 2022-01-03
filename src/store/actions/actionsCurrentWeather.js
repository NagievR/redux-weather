import fetcher from "../../helpers/fetcher";
import { pushToArrayLS, removeElementFromArrayLS } from "../../helpers/localStorageManager";
import {
  WEATHER_CARDS_CONCAT,
  WEATHER_CARD_UPDATED_ADD,
  CARD_REMOVE,
} from "../actionTypes/typesCurrentWeather";
import {
  weatherCardLoading,
  weatherCardLoaded,
  weatherCardUpdating,
  weatherCardUpdated,
} from "./actionsLoading";

const concatWeatherCards = (data) => ({
  type: WEATHER_CARDS_CONCAT,
  payload: data,
});

const addUpdatedWeatherCard = (data) => ({
  type: WEATHER_CARD_UPDATED_ADD,
  payload: {
    id: data.id,
    data,
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

    pushToArrayLS("cityNames", { name: data.name, id: data.id });
    dispatch(concatWeatherCards(data));
  };
};

export const bulkFetchWeatherCard = (cityList) => {
  return async (dispatch, getState) => {

    if (!Array.isArray(cityList)) {
      throw new Error('"cityNames" must be an array');
    }

    const dataList = await Promise.all(
      cityList.map(async (city) => await getCurrentWeather(city.name))
    );
    dispatch(concatWeatherCards(dataList));
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

export const removeCard = (id) => {
  removeElementFromArrayLS('cityNames', id, 'id');
  return {
    type: CARD_REMOVE,
    payload: { id },
  };
};
