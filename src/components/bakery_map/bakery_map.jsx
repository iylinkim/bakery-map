import BakeryList from "components/bakery_list/bakery_list";
import React from "react";
import styles from "./bakery_map.module.css";
import {useGoogleMaps} from "react-hook-google-maps";

const BakeryMap = props => {
  const api_key = process.env.REACT_APP_API_KEY;
  const {ref, map, google} = useGoogleMaps(api_key, {
    center: {lat: 0, lng: 0},
    zoom: 3,
  });
  return (
    <>
      <div
        className={styles.map}
        ref={ref}
        style={{width: 400, height: 300}}></div>
      <BakeryList />
    </>
  );
};

export default BakeryMap;
