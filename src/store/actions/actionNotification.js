import { NOTIFICATION_SHOW, NOTIFICATION_HIDE } from "../actionTypes/typesNotification.js";

export const showNotification = ({ type, title, text, duration }) => ({
  type: NOTIFICATION_SHOW,
  payload: { type, title, text, duration }
});

export const hideNotification = () => ({
  type: NOTIFICATION_HIDE
});
