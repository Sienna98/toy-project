import React, { useState } from "react";
import { styled } from "styled-components";
import MainButton from "../MainButton";

type TabName = string | boolean;

const Header = () => {
  const [isTabButton, setIsTabButton] = useState<TabName>("상품목록");
  const handelIsTabButton = (tabName: TabName) => {
    setIsTabButton(tabName);
  };
  return (
    <StyledHeader>
      <StyledTitle>시은이네 과일가게</StyledTitle>
      <StyledButtonWrap>
        <MainButton
          backgroundColor={`${
            isTabButton === "상품목록" ? "lightgray" : "transparent"
          }`}
          onClick={() => handelIsTabButton("상품목록")}
        >
          상품목록
        </MainButton>
        <MainButton
          backgroundColor={`${
            isTabButton === "장바구니" ? "lightgray" : "transparent"
          }`}
          onClick={() => handelIsTabButton("장바구니")}
        >
          장바구니
        </MainButton>
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
  z-index: 3;
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
