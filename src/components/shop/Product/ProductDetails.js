import React from "react";
import styled from "styled-components";
import shopIcon from "../../../images/icons/store-alt.svg";
import tagIcon from "../../../images/icons/tag-white.svg";

const ProductDetail = () => {
  return (
    <Container>
      <h1>Dylan Hiker Boot</h1>
      <div className="subheading">
        <img src={shopIcon} alt="shop icon" />
        <p>SUPERBALIST</p>
      </div>
      <MainDetails>
        <div>
          <p>Fabication</p>
          <p className="bold">Faux Leather</p>
        </div>
        <div>
          <p>Colour</p>
          <p className="bold">
            <span />
            Brown
          </p>
        </div>
        <div>
          <p>Faux Leather</p>
          <p className="bold">Superbalist</p>
        </div>
      </MainDetails>
      <Divider />
      <div className="subheading padded">
        <p>Product Details</p>
      </div>
      <List>
        <ul>
          <li>Hiking boot</li>
          <li>Speed laces</li>
          <li>Lace-up design</li>
          <li>Rubber sole</li>
        </ul>
      </List>
      <Price>
        <div />
        <div className="promotion">
          <img src={tagIcon} alt="tag" />
          <p>-40% Off</p>
        </div>
        <div className="price">
          <div className="old-price">
            <p>R 599</p>
            <div />
          </div>
          <p>
            R <span>359</span>
          </p>
        </div>
      </Price>
    </Container>
  );
};

const Container = styled.div`
  border: 6px solid var(--azureRadiance);
  padding: 20px;
  h1 {
    font-size: 20px;
    font-family: "suez_oneregular";
    padding-bottom: 5px;
  }
  .subheading {
    display: flex;
    align-items: center;
    gap: 10px;
    &.padded {
      padding-left: 20px;
    }
    p {
      font-size: 12px;
      color: rgba(130, 130, 130, 0.5);
      text-transform: uppercase;
    }
  }
`;

const MainDetails = styled.div`
  padding: 20px 10px 20px 20px;
  div {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    padding-bottom: 10px;
    p {
      font-size: 16px;
      &.bold {
        font-family: "pt_sansbold";
      }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--gray);
  margin-bottom: 20px;
`;

const List = styled.div`
  padding-top: 10px;
  ul {
    li {
      color: var(--gray);
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  align-items: flex-end;
  .promotion {
    text-align: center;
    display: flex;
    align-items: center;
    gap: 5px;
    top: 10px;
    right: 10px;
    background-color: var(--azureRadiance);
    padding: 5px 10px;
    border-radius: 4px;
    width: 120px;
    height: 30px;
    p {
      font-size: 16px;
      color: var(--white);
      font-style: italic;
    }
    img {
      width: 16px;
      height: 13px;
    }
  }
  .price {
    p,
    span {
      font-size: 30px;
      font-family: "suez_oneregular";
    }
    .old-price {
      position: relative;
      display: block;
      div {
        background-color: var(--gray);
        height: 1px;
        width: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transform: rotate(5deg);
      }
      p {
        font-size: 14px;
        text-align: right;
        color: var(--gray);
      }
    }
  }
`;
export default ProductDetail;
