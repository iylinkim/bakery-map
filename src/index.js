import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
// import GoogleMap from "./service/googleMap";
// const googleMap = new GoogleMap(process.env.REACT_APP_API_KEY);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

