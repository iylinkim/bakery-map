import BakeryMap from "../bakery_map/bakery_map";
import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Home = ({location}) => (
  <>
    <Header />
    <section>
      <BakeryMap location={location}/>
    </section>
    <Footer />
  </>
);

export default Home;
