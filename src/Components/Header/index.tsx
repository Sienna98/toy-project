import React from "react";
import { styled } from "styled-components";
import MainButton from "../MainButton";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>시은이네 과일가게</StyledTitle>
      <StyledButtonWrap>
        <MainButton backgroundColor="transparent">상품목록</MainButton>
        <MainButton backgroundColor="lightgray">장바구니</MainButton>
      </StyledButtonWrap>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100vw;
  height: 64px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.025) 0px 2px 6px;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;
const StyledButtonWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: flex;
  gap: 12px;
  margin-right: 16px;
`;
