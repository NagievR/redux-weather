import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// import NotificationProvider from "./contexts/notification";

import store from "./store";
import { Provider as StoreProvider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      {/* <NotificationProvider> */}
        <App />
      {/* </NotificationProvider> */}
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
