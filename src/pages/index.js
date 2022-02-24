import * as React from "react";
import "swiper/css";
import Navbar from "../components/navbar";
import InfoBanner from "../components/InfoBanner";
import Shop from "../components/shop";
import Footer from "../components/footer";
import "../styles/theme.css";
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <InfoBanner />
      <Shop />
      <Footer />
    </main>
  );
};

export default IndexPage;
