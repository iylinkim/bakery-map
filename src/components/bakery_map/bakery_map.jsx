import BakeryList from "components/bakery_list/bakery_list";
import React from "react";
import styles from "./bakery_map.module.css";
import {useGoogleMaps} from "react-hook-google-maps";


const BakeryMap = ({places, latNLng}) => {
  const {ref, map, google} = useGoogleMaps(process.env.REACT_APP_API_KEY, {
    center: latNLng,
    zoom: 15,
  });


  return (
    <>
      <div className={styles.map} ref={ref}></div>
      <BakeryList />
    </>
  );
};

export default BakeryMap;
