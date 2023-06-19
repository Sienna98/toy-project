import React from "react";
import { styled } from "styled-components";

interface IMainButton {
  children: React.ReactNode;
  backgroundcolor: string;
  onClick: () => void;
}
const MainButton = ({ children, backgroundcolor, onClick }: IMainButton) => {
  return (
    <StyledButton
      backgroundcolor={backgroundcolor}
      type="button"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default MainButton;

const StyledButton = styled.button<{ backgroundcolor: string }>`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  background-color: ${({ backgroundcolor, theme }) =>
    theme.colors[backgroundcolor]};
  color: ${({ backgroundcolor }) =>
    backgroundcolor === "darkgray" ? "#9A9BA7" : ""};
`;
