import React from "react";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import FruitBox from "../FruitBox";
import MainButton from "../MainButton";

const MainPage = () => {
  return (
    <StyledMainPage>
      <StyledButtonWrap>
        <MainButton backgroundColor="yellow">전체</MainButton>
        <MainButton backgroundColor="transparent">일반 과일</MainButton>
        <MainButton backgroundColor="transparent">
          <Prime>prime</Prime> 과일
        </MainButton>
      </StyledButtonWrap>
      <FruitBoxWrap className="mt48">
        <FruitBox />
      </FruitBoxWrap>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 48px 48px;
  max-width: 1440px;
  margin: auto;
  margin-top: 64px;
  box-sizing: border-box;
`;
const StyledButtonWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Prime = styled.span`
  font-size: 14px;
  font-weight: 700;
  font-style: italic;
  line-height: 23px;
  color: ${theme.colors.orange};
`;
const FruitBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 48px;
  justify-content: flex-start;
`;
