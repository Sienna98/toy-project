import React from "react";
import { styled } from "styled-components";

interface IMainButton {
  children: React.ReactNode;
  backgroundColor: string;
}
const MainButton = ({ children, backgroundColor }: IMainButton) => {
  return (
    <StyledButton backgroundColor={backgroundColor} type="button">
      {children}
    </StyledButton>
  );
};

export default MainButton;

const StyledButton = styled.button<{ backgroundColor: string }>`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  background-color: ${({ backgroundColor, theme }) =>
    theme.colors[backgroundColor]};
  color: ${({ backgroundColor }) =>
    backgroundColor === "darkgray" ? "#9A9BA7" : ""};
`;
