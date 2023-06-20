import React from "react";
import CartPage from "@/Components/CartPage";
import Header from "@/Components/Header";

interface ICart {
  onMinusNumber: () => void;
  countInCart: number;
}
const Cart = ({ onMinusNumber, countInCart }: ICart) => {
  return (
    <div>
      <Header countInCart={countInCart} />
      <CartPage onMinusNumber={onMinusNumber} />
    </div>
  );
};

export default Cart;
