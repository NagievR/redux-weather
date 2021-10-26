import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import reducerCurrentWeather from "./reducers/reducerCurrentWeather";
import reducerLoading from "./reducers/reducerLoading";

const store = createStore(
  combineReducers({
    currentWeather: reducerCurrentWeather,
    loading: reducerLoading,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
