import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { NavItem } from "react-bootstrap";

const MobileNav = ({ links }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Container>
      <Burger
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={isNavOpen ? "active" : ""}
      >
        <div />
        <div className="transition" />
        <div />
      </Burger>
      {isNavOpen && (
        <Menu>
          {links.map((item, i) => {
            return (
              <Link key={i} to={item.url}>
                {item.label}
              </Link>
            );
          })}
          <Link to="/" className="account">
            SIGN UP
          </Link>
          <Link to="/" className="account">
            LOGIN
          </Link>
        </Menu>
      )}
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Menu = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 90px;
  background-color: var(--white);
  a {
    background-color: var(--gallery);
    display: block;
    padding: 10px;
    text-align: center;
    color: var(--gray);
    &.account {
      color: var(--azureRadiance);
    }
    &:hover {
      color: var(--azureRadiance);
    }
  }
`;
const Burger = styled.div`
  height: 20px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    height: 3px;
    background-color: black;
    width: 100%;
    transition: all 0.25s ease;
  }
  &.active {
    .transition {
      width: 50%;
    }
  }
`;
export default MobileNav;
