import React from "react";
import { fruitProducts } from "@/data/fruit-products";
import FruitBoxItem from "./FruitBoxItem";

interface IMainFruitBox {
  onAddNumber: () => void;
  onMinusNumber: () => void;
  selected: string;
}
const MainFruitBox = ({
  onAddNumber,
  onMinusNumber,
  selected,
}: IMainFruitBox) => {
  return (
    <>
      {selected === "전체" && (
        <>
          {fruitProducts.map((fruit) => (
            <FruitBoxItem
              key={fruit.id}
              fruit={fruit}
              onAddNumber={onAddNumber}
              onMinusNumber={onMinusNumber}
            />
          ))}
        </>
      )}
      {selected === "일반 과일" && (
        <>
          {fruitProducts.map((fruit) => (
            <>
              {!fruit.isPrime && (
                <FruitBoxItem
                  key={fruit.id}
                  fruit={fruit}
                  onAddNumber={onAddNumber}
                  onMinusNumber={onMinusNumber}
                />
              )}
            </>
          ))}
        </>
      )}
      {selected === "prime 과일" && (
        <>
          {fruitProducts.map((fruit) => (
            <>
              {fruit.isPrime && (
                <FruitBoxItem
                  key={fruit.id}
                  fruit={fruit}
                  onAddNumber={onAddNumber}
                  onMinusNumber={onMinusNumber}
                />
              )}
            </>
          ))}
        </>
      )}
    </>
  );
};

export default MainFruitBox;
