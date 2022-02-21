import * as React from "react";
import "swiper/css";
import "../styles/theme.css";
import Navbar from "../components/navbar";
import InfoBanner from "../components/shop/InfoBanner";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <InfoBanner />
    </main>
  );
};

export default IndexPage;
