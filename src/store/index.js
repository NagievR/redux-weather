import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import reducerWeatherCards from "./reducers/reducerWeatherCards";
import reducerLoading from "./reducers/reducerLoading";

const store = createStore(
  combineReducers({
    currentWeather: reducerWeatherCards,
    loading: reducerLoading,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
