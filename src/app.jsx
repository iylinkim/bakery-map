import {useState, useCallback, useEffect} from "react";

import "./app.css";
import AppRouter from "./routes";

function App({places}) {
 
  // const [shops, setShops] = useState([]);
  // const [shops_details, setShopsDetails] = useState([]);
  // const [shops_id, setShopsId] = useState([]);
  // const [latNLng, setLatNLng] = useState({
  //   lat: 0,
  //   lng: 0,
  // });
  // const [nowLocation, setNowLocation] = useState(false);
  // const [photos, setPhotos] = useState([]);

  // const handlePhotos = photoRef => {
  //   places.getPhotos(photoRef).then(src => setPhotos(prev => [...prev, src]));
  // };

  // //현재 위치 받아와서 state에 저장
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(location => {
  //     setLatNLng({
  //       lat: location.coords.latitude,
  //       lng: location.coords.longitude,
  //     });
  //     setNowLocation(true);
  //   });
  // }, [nowLocation]);

  // //Places에 parameter로 현재 위치 넣어주기
  // useEffect(() => {
  //   if (nowLocation) {
  //     places
  //       .getStore(latNLng.lat, latNLng.lng)
  //       .then(data => setShops(data.results));
  //   }
  // }, [latNLng]);

  // useEffect(() => {
  //   //Place의 id state에 넣기
  //   const ids = shops.map(shop => shop.place_id);
  //   setShopsId(ids);
  // }, [shops]);

  // useEffect(() => {
  //   const STANDARD = 1577804400;
  //   shops_id.forEach(shop_id => {
  //     places.getDetail(shop_id).then(data => {
  //       let {reviews} = data;
  //       if (reviews) {
  //         reviews = reviews.sort((a, b) => a.time - b.time);
  //         if (reviews[0].time > STANDARD) {
  //           setShopsDetails(detail => {
  //             // const updated = [...shop];
  //             // updated.push({id: data.place_id, data});
  //             // return updated;
  //             detail && detail.push({id: data.place_id, data});
  //             return detail;
  //           });
  //         }
  //       }
  //     });
  //   });
  // }, [places, shops_id]);

  return (
    <AppRouter
      places={places}
    />
  );
}

export default App;
