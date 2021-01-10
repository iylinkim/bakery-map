import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Location from "./service/location";
import Places from "./service/places";
// import GoogleMap from "./service/googleMap";
// const googleMap = new GoogleMap(process.env.REACT_APP_API_KEY);

const location = new Location();
const places = new Places('AIzaSyDvrxdRlryJr6fvx14XdM42TMuvxSEt3hw', '37.253953','127.0750593');
console.log(places.random());

ReactDOM.render(
  <React.StrictMode>
    <App location={location}/>
  </React.StrictMode>,
  document.getElementById("root")
);
