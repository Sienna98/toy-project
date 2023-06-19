import { useRouter } from "next/router";
import React from "react";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import MainButton from "../MainButton";

interface IHeader {
  countInCart: number;
}
const Header = ({ countInCart }: IHeader) => {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledTitle>시은이네 과일가게</StyledTitle>
      <StyledButtonWrap>
        <MainButton
          backgroundcolor={router.asPath === "/" ? "lightgray" : "transparent"}
          onClick={() => {
            router.push("/");
          }}
        >
          상품목록
        </MainButton>
        <StyledRelative>
          <MainButton
            backgroundcolor={
              router.asPath === "/cart" ? "lightgray" : "transparent"
            }
            onClick={() => {
              router.push("/cart");
            }}
          >
            장바구니
          </MainButton>
          <StyledCartCount>{countInCart}</StyledCartCount>
        </StyledRelative>
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
const StyledRelative = styled.div`
  position: relative;
`;
const StyledCartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`;
