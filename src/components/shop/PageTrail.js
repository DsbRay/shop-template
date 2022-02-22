import React from "react";
import styled from "styled-components";
import chevronRight from "../../images/icons/chevron-right.svg";

const PageTrail = () => {
  return (
    <Container>
      <p>Home</p>
      <img src={chevronRight} />
      <p>Boots</p>
      <img src={chevronRight} />
      <p>Dylan Hiker Boots</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  padding: 20px 40px;
  p {
    font-size: 16px;
    color: var(--azureRadiance);
    &:last-child {
      color: var(--gray);
    }
  }
`;
export default PageTrail;
