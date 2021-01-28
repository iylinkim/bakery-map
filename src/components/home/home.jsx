import BakeryMap from "../bakery_map/bakery_map";
import React, {useState, useEffect, useCallback} from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import BakeryList from "components/bakery_list/bakery_list";

const Home = ({places}) => {
  console.log("render home");
  const [latNLng, setLatNLng] = useState({
    lat: 0,
    lng: 0,
  });
  const [nowLocation, setNowLocation] = useState(false);
  const [shops, setShops] = useState([]);
  const [shops_details, setShopsDetails] = useState([]);
  const [shops_id, setShopsId] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handlePhotos = photoRef => {
    places.getPhotos(photoRef).then(src => setPhotos(prev => [src]));
  };

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


  useEffect(() => {
    const STANDARD = 1577804400;
    shops_id.forEach(shop_id => {
      places.getDetail(shop_id).then(data => {
        let {reviews} = data;
        if (reviews) {
          reviews = reviews.sort((a, b) => a.time - b.time);
          if (reviews[0].time > STANDARD) {
            setShopsDetails(detail => {
              // const updated = [...shop];
              // updated.push({id: data.place_id, data});
              // return updated;
              detail && detail.push({id: data.place_id, data});
              return detail;
            });
          }
        }
      });
    });
  }, [places, shops_id]);

  //Places에 parameter로 현재 위치 넣어주기
  useEffect(() => {
    if (nowLocation) {
      places
        .getStore(latNLng.lat, latNLng.lng)
        .then(data => setShops(data.results));
    }
  }, [latNLng]);

  //Place의 id state에 넣기
  useEffect(() => {
    const ids = shops.map(shop => shop.place_id);
    setShopsId(ids);
  }, [shops]);

  return (
    <>
      <Header />
      <section>
        <BakeryMap latNLng={latNLng} />
      </section>
      <section>
        <ul>
          {shops_details &&
            Object.keys(shops_details).map(key => {
              return (
                <BakeryList
                  key={key}
                  shops_details={shops_details[key].data}
                  handlePhotos={handlePhotos}
                />
              );
            })}
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default Home;
