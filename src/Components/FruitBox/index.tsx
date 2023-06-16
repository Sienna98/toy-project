import React from "react";
import { fruitProducts } from "@/data/fruit-products";
import FruitBoxItem from "./FruitBoxItem";

type ButtonName = string | boolean;
interface IFruitBox {
  handleAddNumber: () => void;
  handleMinusNumber: () => void;
  selected: ButtonName;
}
const FruitBox = ({
  handleAddNumber,
  handleMinusNumber,
  selected,
}: IFruitBox) => {
  return (
    <>
      {selected === "전체" && (
        <>
          {fruitProducts.map((fruit) => (
            <FruitBoxItem
              key={fruit.id}
              fruit={fruit}
              handleAddNumber={handleAddNumber}
              handleMinusNumber={handleMinusNumber}
            />
          ))}
        </>
      )}
      {selected === "일반 과일" && <>{selected}</>}
      {selected === "prime 과일" && <>{selected}</>}
    </>
  );
};

export default FruitBox;
