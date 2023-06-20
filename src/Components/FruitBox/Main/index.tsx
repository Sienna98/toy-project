import React from "react";
import { ALL_FRUITS, ORDINARY_FRUITS, PRIME_FRUITS } from "@/constants";
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
