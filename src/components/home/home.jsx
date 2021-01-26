import BakeryMap from "../bakery_map/bakery_map";
import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import BakeryList from "components/bakery_list/bakery_list";

const Home = ({shops, latNLng}) => (
  <>
    <Header />
    <section>
      <BakeryMap latNLng={latNLng} />
    </section>
    <section>
      <BakeryList shops={shops}/>
    </section>
    <Footer />
  </>
);

export default Home;
