import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GalleryContainer from "./containers/GalleryContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GalleryContainer />
  </React.StrictMode>,
  rootElement
);
