import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import instagramIcon from "../images/icons/instagram.svg";
import facebookIcon from "../images/icons/facebook.svg";
const Footer = () => {
  return (
    <Container>
      <div className="section">
        <h2>Account</h2>
        <Link to="/">Account details</Link>
        <Link to="/">Orders</Link>
        <Link to="/">Returns and Exchanges</Link>
      </div>
      <div className="section">
        <h2>The Company</h2>
        <Link to="/">About us</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Contact</Link>
      </div>
      <div />
      <div className="social">
        <h2>Follow us!</h2>
        <div>
          <Link to="/">
            <img src={instagramIcon} alt="instagram" />
          </Link>
          <Link to="/">
            <img src={facebookIcon} alt="facebook" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--darkGray);
  padding: 40px 15%;
  h2 {
    font-size: 20px;
    color: var(--white);
  }
  a {
    display: block;
    outline: none;
    text-decoration: none;
    color: var(--white);
    transition: opacity 0.25s ease;
    font-size: 16px;
    &:hover {
      color: var(--white);
      opacity: 0.7;
    }
  }
  .section {
    padding-bottom: 20px;
    text-align: center;
  }
  .social {
    text-align: center;
    h2 {
      font-family: "suez_oneregular";
      padding-bottom: 10px;
    }
    div {
      display: flex;
      align-items: center;
      gap: 40px;
      justify-content: center;
    }
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .section {
      text-align: left;
    }
  }
`;
export default Footer;
