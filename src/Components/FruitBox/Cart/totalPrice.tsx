import React from "react";
import { styled } from "styled-components";

const TotalPrice = () => {
  return (
    <StyledTotalPrice>
      <div>test</div>
    </StyledTotalPrice>
  );
};

export default TotalPrice;

const StyledTotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
