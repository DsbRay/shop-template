import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import ProductDetail from "./ProductDetails";
import ProductOptions from "./ProductOptions";
const Product = () => {
  return (
    <>
      <Container>
        <Slider />
        <div>
          <ProductDetail />
          <ProductOptions />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  margin: 0 40px;
  .mySwiper {
    .swiper-pagination-bullet {
      background: rgba(0, 0, 0, 0.19);
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: var(--gray);
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Product;
