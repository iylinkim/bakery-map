import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Places from "./service/places";
import Libraries from "service/Libraries";


// import GoogleMap from "./service/googleMap";
// const googleMap = new GoogleMap(process.env.REACT_APP_API_KEY);

// let lat, lng;
// navigator.geolocation.getCurrentPosition(location => {
//   lat = location.coords.latitude;
//   lng = location.coords.longitude;
//   return lat, lng;
// });
// const places = new Places('AIzaSyDvrxdRlryJr6fvx14XdM42TMuvxSEt3hw', '37.253953','127.0750593');
// console.log(places.random());
// console.log(axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.253953,127.0750593&radius=5000&fields=reviews&keyword=bakery&key=${process.env.REACT_APP_API_KEY}`));

const places = new Places(process.env.REACT_APP_API_KEY, 0,0);

ReactDOM.render(
  <React.StrictMode>
    <App places={places}/>
    <Libraries/>
  </React.StrictMode>,
  document.getElementById("root")
);
