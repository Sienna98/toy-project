import React from "react";
import { fruitProducts } from "@/data/fruit-products";

interface IFruitBox {
  onMinusNumber: () => void;
}
const CartFruitBox = ({ onMinusNumber }: IFruitBox) => {
  return (
    <>
      {fruitProducts.map((fruit) => (
        <div key={fruit.id}>
          {fruit.name}
          <button type="button" onClick={onMinusNumber}>
            -
          </button>
        </div>
      ))}
    </>
  );
};
export default CartFruitBox;
