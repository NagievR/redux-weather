import {
  NOTIFICATION_HIDE,
  NOTIFICATION_SHOW
} from "../actionTypes/typesNotification";

const NOTIFICATION_TYPES = ["info", "error", "success"];

const initialState = {
  isVisible: false,
  title: "",
  text: "",
  type: NOTIFICATION_TYPES[0],
  duration: 5000,
};

const reducerNotification = (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTIFICATION_SHOW:
      if (payload.type && !NOTIFICATION_TYPES.includes(payload.type)) {
        console.warn(`${payload.type} is not a notification type.`);
      }
      return {
        ...state,
        isVisible: true,
        title: payload.title ? payload.title : initialState.title,
        text: payload.text ? payload.text : initialState.text,
        type: payload.type ? payload.type : initialState.type,
        duration: payload.duration ? payload.duration : initialState.duration
      }
    case NOTIFICATION_HIDE: {
      return {
        ...state,
        isVisible: false,
        title: initialState.title,
        text: initialState.text,
        type: initialState.type,
        duration: initialState.duration,
      }
    }
    default:
      return state;
  }
};

// const reducerNotification = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case VISIBILITY_SET:
//       return {
//         ...state,
//         isVisible: payload,
//       };
//     case TITLE_SET:
//       return {
//         ...state,
//         title: payload,
//       };
//     case TEXT_SET:
//       return {
//         ...state,
//         text: payload,
//       };
//     case TYPE_SET:
//       if (!NOTIFICATION_TYPES.includes(payload)) {
//         console.warn(`${payload} is not a notification type.`);
//         return {
//           ...state,
//           type: NOTIFICATION_TYPES[0],
//         };
//       }
//       return {
//         ...state,
//         type: payload,
//       };
//     case DURATION_SET:
//       return {
//         ...state,
//         duration: payload,
//       };
//     default:
//       return state;
//   }
// };

export default reducerNotification;
