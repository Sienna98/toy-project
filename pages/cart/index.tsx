import React from "react";
import CartPage from "@/Components/CartPage";
import Header from "@/Components/Header";
import useCount from "@/hooks/useCount";

const Cart = () => {
  const { handleIsMinusNumber, count } = useCount();

  return (
    <div>
      <Header countInCart={count} />
      <CartPage onMinusNumber={handleIsMinusNumber} />
    </div>
  );
};

export default Cart;
