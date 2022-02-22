import React from "react";
import styled from "styled-components";
import bannerImg from "../../images/top-banner.png";

const PromotionBanner = () => {
  return (
    <Container banner={bannerImg}>
      <div>
        <h1>Summer sale!</h1>
        <h2>Up to 50% off!</h2>
      </div>
      <button>Shop now</button>
    </Container>
  );
};
const Container = styled.div`
  margin: 0 20px;
  background-image: ${(props) => `url(${props.banner})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  h1,
  h2 {
    color: var(--white);
    font-family: "suez_oneregular";
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
  button {
    border: 3px solid var(--white);
    width: 161px;
    height: 39px;
    background-color: transparent;
    border-radius: 4px;
    color: var(--white);
    font-size: 17px;
    font-family: "suez_oneregular";
  }
  @media (min-width: 1024px) {
    padding: 0 15% 0 40px;
  }
`;
export default PromotionBanner;
