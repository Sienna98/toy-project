import React from "react";
import styled from "styled-components";
import CartFruitBox from "../FruitBox/Cart";

interface ICartPage {
  onMinusNumber: () => void;
}
const CartPage = ({ onMinusNumber }: ICartPage) => {
  return (
    <StyledCartPage>
      <StyledFruitBoxWrap>
        <CartFruitBox onMinusNumber={onMinusNumber} />
      </StyledFruitBoxWrap>
    </StyledCartPage>
  );
};

export default CartPage;

const StyledCartPage = styled.div`
  margin-top: 64px;
  padding: 48px;
  display: flex;
  justify-content: center;
`;
const StyledFruitBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 48px;
  justify-content: flex-start;
  width: 880px;
`;
