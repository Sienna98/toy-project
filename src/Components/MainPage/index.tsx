import React from "react";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";

const MainPage = () => {
  return <StyledMainPage>Main Page</StyledMainPage>;
};

export default MainPage;

const StyledMainPage = styled.div`
  background-color: ${theme.colors.lightgray};
`;
