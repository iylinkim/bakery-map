import {useState} from "react";
import {useEffect} from "react/cjs/react.development";
import Places from "service/places";
import "./app.css";
import AppRouter from "./routes";

function App({places}) {
  console.log("render app jsx");
  const api_key = process.env.REACT_APP_API_KEY;
  const [shops, setShops] = useState([]);
  // const [shops_details, setShopsDetails] = useState({});
  const [shops_details, setShopsDetails] = useState([]);
  const [shops_id, setShopsId] = useState([]);
  const [latNLng, setLatNLng] = useState({
    lat: 0,
    lng: 0,
  });
  const [nowLocation, setNowLocation] = useState(false);

  //현재 위치 받아와서 state에 저장
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      setLatNLng({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      setNowLocation(true);
    });
  }, [nowLocation]);

  //Places에 parameter로 현재 위치 넣어주기
  useEffect(() => {
    if (nowLocation) {
      places
        .getStore(latNLng.lat, latNLng.lng)
        .then(data => setShops(data.results));
    }
  }, [latNLng]);

  // useEffect(() => {
  //   //Place의 id state에 넣기
  //   const ids = shops.map(shop => shop.place_id);
  //   setShopsId(ids);

  //   let review_time;
  //   shops_id.forEach(shop_id => {
  //     //shop detail 얻어오는 method
  //     places.getDetail(shop_id).then(data => {
  //       console.log(data.result);
  //       review_time = data.result.reviews.map(
  //         review => review.relative_time_description
  //       );
  //       //1년이상된 리뷰 제외
  //       review_time = review_time.filter(review => !review.includes("년"));

  //       //6개월 이하 리뷰만 추출(새로생긴 베이커리 선정 기준)
  //       const pattern = new RegExp("^[1-6][달주]");
  //       review_time = review_time.filter(review => review.match(pattern));
  //     });
  //   });
  // }, []);

  useEffect(() => {
    const STANDARD = 1577804400;
    //Place의 id state에 넣기
    const ids = shops.map(shop => shop.place_id);
    setShopsId(ids);

    shops_id.map(shop_id => {
      places.getDetail(shop_id).then(data => {
        let {reviews} = data;
        if (reviews) {
          reviews = reviews.sort((a, b) => a.time - b.time);
          if (reviews[0].time > STANDARD) {
            shops_details.push({id: data.place_id, data});
            setShopsDetails(shops_details);
            // setShopsDetails([...shops_details]);
            // shops_details[data.place_id] = data;
          }
        }
      });
    });
  }, [shops]);

  return <AppRouter latNLng={latNLng} shops={shops_details} />;
}

export default App;
