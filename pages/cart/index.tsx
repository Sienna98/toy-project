import React from "react";
import CartPage from "@/Components/CartPage";
import Header from "@/Components/Header";

interface ICart {
  onMinusNumber: () => void;
  countInCart: number;
  onClickTab: (tabName: string) => void;
  tabButton: string;
  cartPageTab: (select: string) => void;
}
const Cart = ({
  onMinusNumber,
  countInCart,
  onClickTab,
  tabButton,
  cartPageTab,
}: ICart) => {
  return (
    <div>
      <Header
        countInCart={countInCart}
        onClickTab={onClickTab}
        tabButton={tabButton}
        cartPageTab={cartPageTab}
      />
      <CartPage onMinusNumber={onMinusNumber} />
    </div>
  );
};

export default Cart;
