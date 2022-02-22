import * as React from "react";
import "swiper/css";
import Navbar from "../components/navbar";
import InfoBanner from "../components/InfoBanner";
import Shop from "../components/shop";
import "../styles/theme.css";
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <InfoBanner />
      <Shop />
    </main>
  );
};

export default IndexPage;
