import React from "react";
import { fruitProducts } from "@/data/fruit-products";
import FruitBoxItem from "./FruitBoxItem";

interface IFruitBox {
  onMinusNumber: () => void;
}
const CartFruitBox = ({ onMinusNumber }: IFruitBox) => {
  return (
    <>
      {fruitProducts.map((fruit) => (
        <FruitBoxItem
          key={fruit.id}
          fruit={fruit}
          onMinusNumber={onMinusNumber}
        />
      ))}
    </>
  );
};
export default CartFruitBox;
