import {
  WEATHER_CARD_LOADED,
  WEATHER_CARD_LOADING,
  WEATHER_CARD_UPDATING,
  WEATHER_CARD_UPDATED,
} from "../actionTypes/typesLoading";

export const weatherCardLoading = () => ({
  type: WEATHER_CARD_LOADING,
});

export const weatherCardLoaded = () => ({
  type: WEATHER_CARD_LOADED,
});

export const weatherCardUpdating = (id) => ({
  type: WEATHER_CARD_UPDATING,
  payload: { id },
});

export const weatherCardUpdated = (id) => ({
  type: WEATHER_CARD_UPDATED,
  payload: { id },
});
