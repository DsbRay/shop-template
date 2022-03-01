import React from "react";
import styled from "styled-components";
import advertBanner from "../../images/advert-banner.png";

const Advert = () => {
  return <Banner src={advertBanner} alt="advert-banner" />;
};

const Banner = styled.img`
  cursor: pointer;
  display: block;
  margin: 40px auto;
  width: 100%;
  height: 100%;
  max-width: 307.2px;
  max-height: 616px;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.9;
  }
`;
export default Advert;
