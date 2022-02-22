import React from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SelectFilter = () => {
  const [color, setColor] = React.useState("");
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <Container>
      <label> Colour </label>
      <FormControl fullWidth>
        <Select value={color} onChange={handleChange}>
          <MenuItem value={"option-1"}>Option 1</MenuItem>
          <MenuItem value={"option-2"}>Option 2</MenuItem>
          <MenuItem value={"option-3"}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 30px;
  label {
    color: var(--gray);
    text-transform: uppercase;
  }
  fieldset {
    border-color: red;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
  .MuiSelect-select {
    border: 1px solid black;
    padding: 10px;
  }
`;
export default SelectFilter;
