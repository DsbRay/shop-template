import React, { useState } from "react";
import styled from "styled-components";
import { InputTags } from "react-bootstrap-tagsinput";
import "react-bootstrap-tagsinput/dist/index.css";

const ChipFilter = () => {
  const [state, setState] = useState([]);
  return (
    <Container>
      <p>BRANDS</p>
      <div className="input-group">
        <InputTags values={state} onTags={(value) => setState(value.values)} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 30px;
  p {
    color: var(--gray);
  }
  .badge {
    background-color: var(--azureRadiance) !important;
    text-transform: uppercase;
    font-size: 16px;
  }
`;
export default ChipFilter;
