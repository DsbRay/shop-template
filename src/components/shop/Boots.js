import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import boot1 from "../../images/boot-1.png";
import boot2 from "../../images/boot-2.png";
import boot3 from "../../images/boot-3.png";
import boot4 from "../../images/boot-4.png";
import boot5 from "../../images/boot-5.png";
import tagIcon from "../../images/icons/tag-white.svg";
import storeIcon from "../../images/icons/store-alt.svg";
import arrowIcon from "../../images/icons/arrow-right.svg";

const BOOT_LIST = [
  {
    img: boot1,
    name: "More from Boots",
    shop: "Superbalist",
    price: "500",
    promotion: "40",
    lowStock: false,
  },
  {
    img: boot2,
    name: "Cameron leather ",
    shop: "Superbalist",
    price: "539",
    promotion: "",
    lowStock: false,
  },
  {
    img: boot3,
    name: "Grayson Brogue",
    shop: "Superbalist",
    price: "420",
    promotion: "40",
    lowStock: true,
  },
  {
    img: boot4,
    name: "Orca",
    shop: "Jack and Jones",
    price: "500",
    promotion: "40",
    lowStock: true,
  },
  {
    img: boot5,
    name: "Jean Hiker Boots",
    shop: "Superbalist",
    price: "600",
    promotion: "",
    lowStock: false,
  },
];
const Boots = () => {
  const renderBootList = () => {
    return BOOT_LIST.map((item, i) => {
      const { img, name, shop, price, promotion, lowStock } = item;
      return (
        <div className="product">
          <div className="image">
            <img src={img} alt={`img-${i}`} />
            {promotion && (
              <div className="promotion">
                <img src={tagIcon} alt="tag" />
                <p>-{promotion}% Off</p>
              </div>
            )}
            {lowStock && (
              <div className="low">
                <p>LOW STOCK</p>
              </div>
            )}
          </div>
          <div className="details">
            <h1>{name}</h1>
            <div className="shop">
              <img src={storeIcon} alt="store-icon" />
              <p>{shop}</p>
            </div>
            <div className="price">
              <p>R {price}</p>
              <Link to="/">
                Link <img src={arrowIcon} alt="chevron" />
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <Container>
      <div className="header">
        <h1>
          More from <span>Boots</span>
        </h1>
        <div className="divider" />
      </div>
      <BootList>{renderBootList()}</BootList>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
  .header {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto 1fr;
    align-items: center;
    h1 {
      font-family: "suez_oneregular";
      font-size: 20px;
      span {
        color: var(--azureRadiance);
        font-family: "suez_oneregular";
      }
    }
    .divider {
      height: 2px;
      width: 100%;
      background-color: var(--gray);
    }
  }
`;

const BootList = styled.div`
  display: grid;
  grid-gap: 40px;
  margin: 40px 0;

  h1 {
    font-size: 18px;
    font-family: "suez_oneregular";
  }
  .product {
    background-color: var(--gallery);
    max-width: 362px;
    display: block;
    margin: 0 auto;
  }
  .details {
    padding: 10px;
  }
  .image {
    height: 200px;
    position: relative;

    img {
      max-width: 100%;
    }
    .promotion {
      position: absolute;
      top: 5px;
      right: 5px;
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
    .low {
      background: rgba(0, 0, 0, 0.56);
      border-radius: 4px;
      font-style: italic;
      color: var(--white);
      position: absolute;
      padding: 2px 5px;
      bottom: 20px;
      left: 10px;
    }
  }
  .shop {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 0;
    p {
      color: var(--gray);
      font-weight: bold;
    }
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 20px;
      font-family: "suez_oneregular";
      color: var(--azureRadiance);
    }
    a {
      color: var(--gray);
      transition: opacity 0.25s ease;
      img {
        padding-left: 10px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Boots;
