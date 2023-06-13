import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div>시은이네 과일가게</div>
      <div>
        <button type="button">상품목록</button>
        <button type="button">장바구니</button>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100vw;
  height: 64px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px;
`;
