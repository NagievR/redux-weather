// import { createContext, useReducer } from "react";

// export const NotificationContext = createContext();

// const NOTIFICATION_TYPES = ["info", "error", "success"];

// const initialState = {
//   isVisible: false,
//   title: "Notification",
//   text: "",
//   type: NOTIFICATION_TYPES[0],
//   duration: 5000,
// };

// const TYPES = {
//   VISIBILITY_SET: "notifications/VISIBILITY_SET",
//   TITLE_SET: "notifications/TITLE_SET",
//   TEXT_SET: "notifications/TEXT_SET",
//   TYPE_SET: "notifications/TYPE_SET",
//   DURATION_SET: "notifications/DURATION_SET",
// };

// const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case TYPES.VISIBILITY_SET:
//       return {
//         ...state,
//         isVisible: payload,
//       };
//     case TYPES.TITLE_SET:
//       return {
//         ...state,
//         title: payload,
//       };
//     case TYPES.TEXT_SET:
//       return {
//         ...state,
//         text: payload,
//       };
//     case TYPES.TYPE_SET:
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
//     default:
//       return state;
//   }
// };

// const NotificationProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const data = {
//     show: () => dispatch({ type: TYPES.VISIBILITY_SET, payload: true }),
//     hide: () => dispatch({ type: TYPES.VISIBILITY_SET, payload: false }),
//     setTitle: (title) => dispatch({ type: TYPES.TITLE_SET, payload: title }),
//     setText: (text) => dispatch({ type: TYPES.TEXT_SET, payload: text }),
//     setType: (type) => dispatch({ type: TYPES.TYPE_SET, payload: type }),
//     setDuration: (ms) => dispatch({ type: TYPES.DURATION_SET, payload: ms }),
//     isVisible: state.isVisible,
//     title: state.title,
//     text: state.text,
//     type: state.type,
//     duration: state.duration,
//   };

//   data.notify = ({ type, title, text }) => {
//     data.show();
//     title && data.setTitle(title);
//     text && data.setText(text);
//     type && data.setType(type);
//   };

//   return (
//     <NotificationContext.Provider value={data}>
//       {children}
//     </NotificationContext.Provider>
//   );
// };

// export default NotificationProvider;
