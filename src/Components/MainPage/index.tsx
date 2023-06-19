import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import MainFruitBox from "../FruitBox/Main";
import Header from "../Header";
import MainButton from "../MainButton";

interface IMainPage {
  onAddNumber: () => void;
  onMinusNumber: () => void;
  countInCart: number;
}
const MainPage = ({ onAddNumber, onMinusNumber, countInCart }: IMainPage) => {
  const [isfruitTypeButton, setIsfruitTypeButton] = useState<string>("전체");

  const handleIsfruitTypeButton = (buttonName: string) => {
    setIsfruitTypeButton(buttonName);
  };
  return (
    <>
      <Header countInCart={countInCart} />
      <StyledMainPage>
        <StyledButtonWrap>
          <MainButton
            backgroundcolor={
              isfruitTypeButton === "전체" ? "yellow" : "transparent"
            }
            onClick={() => handleIsfruitTypeButton("전체")}
          >
            전체
          </MainButton>
          <MainButton
            backgroundcolor={
              isfruitTypeButton === "일반 과일" ? "yellow" : "transparent"
            }
            onClick={() => handleIsfruitTypeButton("일반 과일")}
          >
            일반 과일
          </MainButton>
          <MainButton
            backgroundcolor={
              isfruitTypeButton === "prime 과일" ? "yellow" : "transparent"
            }
            onClick={() => handleIsfruitTypeButton("prime 과일")}
          >
            <StyledPrime>prime</StyledPrime> 과일
          </MainButton>
        </StyledButtonWrap>
        <StyledFruitBoxWrap className="mt48">
          <MainFruitBox
            onAddNumber={onAddNumber}
            onMinusNumber={onMinusNumber}
            selected={isfruitTypeButton}
          />
        </StyledFruitBoxWrap>
      </StyledMainPage>
    </>
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
const StyledPrime = styled.span`
  font-size: 14px;
  font-weight: 700;
  font-style: italic;
  line-height: 23px;
  color: ${theme.colors.orange};
`;
const StyledFruitBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 48px;
  justify-content: flex-start;
`;
