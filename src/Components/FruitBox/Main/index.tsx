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
  const ALL_FRUITS = "전체";
  const ORDINARY_FRUITS = "일반 과일";
  const PRIME_FRUITS = "prime 과일";
  return (
    <>
      {selected === ALL_FRUITS && (
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
      {selected === ORDINARY_FRUITS && (
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
      {selected === PRIME_FRUITS && (
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
