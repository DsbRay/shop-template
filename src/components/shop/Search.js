import React from "react";
import styled from "styled-components";
import chevronLeft from "../../images/icons/chevron-left.svg";
import searchIcon from "../../images/icons/search.svg";
import ChipFilter from "../elements/ChipFilter";
import SearchFilter from "../elements/SelectFilter";
import PriceFilter from "../elements/PriceFilter";

const Search = () => {
  return (
    <Container>
      <Searchbar>
        <div className="flex">
          <img src={chevronLeft} alt="chevron-left" />
          <p> Hide </p>
        </div>
        <div className="flex">
          <h2>Search reway</h2>
          <img src={searchIcon} alt="search-icon" />
        </div>
      </Searchbar>
      <Filters>
        <ChipFilter />
        <SearchFilter />
        <PriceFilter />
        <button className="search-btn">
          <img src={searchIcon} alt="search-icon" />
          SEARCH
        </button>
      </Filters>
    </Container>
  );
};

const Container = styled.div`
  border: 3px solid var(--azureRadiance);
`;
const Searchbar = styled.div`
  background-color: var(--azureRadiance);
  padding: 10px 20px;
  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
    h2 {
      color: var(--white);
      font-size: 20px;
      font-family: "suez_oneregular";
      text-transform: uppercase;
      padding-top: 5px;
    }
    p {
      color: var(--white);
    }
    img {
      position: relative;
      top: 2px;
    }
  }
`;
const Filters = styled.div`
  .search-btn {
    display: block;
    margin: 30px auto;
    width: 174px;
    height: 58px;
    background-color: var(--azureRadiance);
    font-size: 20px;
    font-family: "suez_oneregular";
    border: none;
    color: var(--white);
    cursor: pointer;
    transition: opacity 0.25s ease;
    &:hover {
      opacity: 0.7;
    }
    img {
      margin-right: 10px;
    }
  }
`;
export default Search;
