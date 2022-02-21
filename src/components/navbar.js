import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/logo.svg";
import giftIcon from "../images/icons/gift.svg";
import starIcon from "../images/icons/star.svg";
import heartIcon from "../images/icons/heart.svg";
import tagIcon from "../images/icons/tag.svg";

const NAV_LINKS = [
  {
    url: "/apparels",
    label: "Apparels",
  },
  {
    url: "/",
    label: "Shoes",
  },
  {
    url: "/equipment",
    label: "Equipment",
  },
  {
    url: "/gift",
    label: "Gift",
  },
];

const ICON_LINKS = [
  {
    icon: giftIcon,
    name: "gift",
  },
  {
    icon: starIcon,
    name: "star",
  },
  {
    icon: heartIcon,
    name: "heart",
  },
  {
    icon: tagIcon,
    name: "tag",
  },
];
const Navbar = () => {
  const renderNavLinks = () => {
    return NAV_LINKS.map((link, i) => {
      return (
        <React.Fragment key={`link-${i}`}>
          <Link to={link.url}> {link.label} </Link>{" "}
        </React.Fragment>
      );
    });
  };
  const renderIconList = () => {
    return ICON_LINKS.map((icon, i) => {
      return (
        <React.Fragment key={`link-${i}`}>
          <img src={icon.icon} alt={icon.name} />{" "}
        </React.Fragment>
      );
    });
  };
  return (
    <Container>
      <img src={logo} alt="logo" />
      <div className="links flex"> {renderNavLinks()} </div>{" "}
      <div className="icon flex"> {renderIconList()} </div>{" "}
      <div className="user">
        <Link to="/"> sign up </Link>{" "}
        <Link to="/" className="login">
          login{" "}
        </Link>{" "}
      </div>{" "}
    </Container>
  );
};

const Container = styled.div`
  background-color: lightcyan;
  padding: 25px 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 17px;
    font-family: "suez_oneregular";
  }
  .flex {
    display: flex;
    gap: 30px;
    &.links {
      a {
        color: var(--black);
        transition: all 0.25s ease;
        &:hover {
          opacity: 0.7;
          color: var(--azureRadiance);
        }
      }
      [aria-current]:not([aria-current="false"]) {
        color: var(--azureRadiance);
      }
    }
    &.icon {
      img {
        width: 20px;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      color: var(--azureRadiance);
      text-transform: uppercase;
      padding: 10px 30px;
      transition: opacity 0.25s ease;
      &:hover {
        opacity: 0.7;
      }
      &.login {
        border: 3px solid var(--azureRadiance);
        border-radius: 4px;
      }
    }
  }
`;
export default Navbar;
