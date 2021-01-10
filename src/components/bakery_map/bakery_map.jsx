import BakeryList from "components/bakery_list/bakery_list";
import React from "react";
import styles from "./bakery_map.module.css";
import {useGoogleMaps} from "react-hook-google-maps";
import {useEffect} from "react";
import {useState} from "react";
import { memo } from "react";

const BakeryMap = ({location}) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [latNLng, setLatNLng] = useState({
    lat: 0,
    lng: 0,
  });
  const {ref, map, google} = useGoogleMaps(api_key, {
    center: latNLng,
    zoom: 3,
  });
 
  // setLatNLng({
  //   lat: location.locationInfo.lat,
  //   lng: location.locationInfo.lng,
  // });
  console.log(location.getNowLocation());
  return (
    <>
      <div className={styles.map} ref={ref}></div>
      <BakeryList />
    </>
  );
};

export default BakeryMap;
