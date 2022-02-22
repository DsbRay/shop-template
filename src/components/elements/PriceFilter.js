import React, { useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";

const ChipFilter = () => {
  const [value, setValue] = useState([300, 2000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <label>Pricing</label>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={3000}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 30px;
  label {
    color: var(--gray);
    text-transform: uppercase;
  }
  .MuiSlider-colorPrimary {
    color: var(--azureRadiance);
  }
  .MuiSlider-rail {
    color: var(--gray);
  }
  .MuiSlider-valueLabel {
    top: 50px;
    background-color: transparent;
    color: var(--gray);
  }
`;
export default ChipFilter;
