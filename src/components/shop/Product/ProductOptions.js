import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cartIcon from "../../../images/icons/cart-plus.svg";

const ProductOptions = () => {
  const [size, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSizeChange = (event) => {
    setColor(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <Container>
      <FormControl fullWidth>
        <p> SIZE </p>
        <Select value={size} onChange={handleSizeChange}>
          <MenuItem value={"option-1"}>Option 1</MenuItem>
          <MenuItem value={"option-2"}>Option 2</MenuItem>
          <MenuItem value={"option-3"}>Option 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <p className="padded"> Quantity </p>
        <Select value={quantity} onChange={handleQuantityChange}>
          <MenuItem value={"option-1"}>Option 1</MenuItem>
          <MenuItem value={"option-2"}>Option 2</MenuItem>
          <MenuItem value={"option-3"}>Option 3</MenuItem>
        </Select>
      </FormControl>
      <Button>
        <img src={cartIcon} alt="cart" />
        Add to cart
      </Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--gallery);
  padding: 50px 20px;
  margin: 20px 0;
  p {
    color: var(--gray);
    text-transform: uppercase;
  }
  fieldset {
    border-color: red;
  }
  .padded {
    padding-top: 30px;
  }
  .MuiSelect-select {
    background-color: var(--white);
  }
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
  .MuiSelect-select {
    border: 1px solid black;
    padding: 10px;
  }
`;

const Button = styled.button`
  height: 85px;
  background-color: var(--azureRadiance);
  font-family: "suez_oneregular";
  font-size: 30px;
  display: flex;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  color: var(--white);
  gap: 20px;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.7;
  }
`;
export default ProductOptions;
