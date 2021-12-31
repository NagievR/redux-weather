import {
  VISIBILITY_SET,
  TITLE_SET,
  TEXT_SET,
  TYPE_SET,
  DURATION_SET,
} from "../actionTypes/typesNotification";

const NOTIFICATION_TYPES = ["info", "error", "success"];

const initialState = {
  isVisible: false,
  title: "Notification",
  text: "",
  type: NOTIFICATION_TYPES[0],
  duration: 5000,
};

const reducerNotification = (state = initialState, { type, payload }) => {
  switch (type) {
    case VISIBILITY_SET:
      return {
        ...state,
        isVisible: payload,
      };
    case TITLE_SET:
      return {
        ...state,
        title: payload,
      };
    case TEXT_SET:
      return {
        ...state,
        text: payload,
      };
    case TYPE_SET:
      if (!NOTIFICATION_TYPES.includes(payload)) {
        console.warn(`${payload} is not a notification type.`);
        return {
          ...state,
          type: NOTIFICATION_TYPES[0],
        };
      }
      return {
        ...state,
        type: payload,
      };
    case DURATION_SET:
      return {
        ...state,
        duration: payload,
      };
    default:
      return state;
  }
};

export default reducerNotification;
