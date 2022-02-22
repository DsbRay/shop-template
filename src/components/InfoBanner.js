import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const InfoBanner = () => {
  return (
    <Container>
      <p className="title">Adventure is just around the corner!</p>
      <div className="flex">
        <Link to="/">find a store</Link>
        <p>Not in South Africa?</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px;
  background-color: var(--gallery);
  .flex {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-direction: column;
    margin-top: 15px;
  }
  p,
  a {
    text-align: center;
    font-family: "suez_oneregular";
  }
  a {
    color: var(--azureRadiance);
    text-transform: uppercase;
    padding: 10px 30px;
    transition: opacity 0.25s ease;
    border-radius: 4px;
    border: 3px solid var(--azureRadiance);
    &:hover {
      opacity: 0.7;
    }
  }
  @media (min-width: 1024px) {
    padding: 25px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      padding-left: 90px;
    }
    .flex {
      gap: 25px;
      flex-direction: row;
      margin-top: 0;
    }
  }
`;
export default InfoBanner;
