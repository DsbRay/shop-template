import React from "react";
import styled from "styled-components";
import Search from "./Search";
import AddBanner from "./AddBanner";
import SignUp from "./SignUp";
import PromotionBanner from "./PromotionBanner";
import PageTrail from "./PageTrail";

const Shop = () => {
  return (
    <Container>
      <div>
        <Search />
        <AddBanner />
        <SignUp />
      </div>
      <div>
        <PromotionBanner />
        <PageTrail />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;
export default Shop;
