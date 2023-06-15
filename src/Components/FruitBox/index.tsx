import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import MainButton from "../MainButton";

interface IFruit {
  id: number;
  name: string;
  image: string;
  stock: number;
  price: number;
  isPrime: boolean;
}

interface IFruitBox {
  prime?: boolean;
  fruitName: string;
}
const FruitBox = ({ prime = false, fruitName }: IFruitBox) => {
  const [fruits, setFruits] = useState<IFruit[]>([]);
  useEffect(() => {
    fetch("/api/fruits")
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <StyledFruitBox>
      {prime && <Prime>prime</Prime>}
      <Flex>
        {fruits.map((fruit) => {
          if (fruit.name === fruitName) {
            return (
              <div key={fruit.id}>
                <img src={fruit.image} alt={fruit.name} />
                <StyledFruitDetail>
                  <li className="fruit">{fruit.name}</li>
                  <li className="price mt19">{fruit.price}</li>
                  <li className="count mt13">
                    <span>잔량</span>
                    {fruit.stock}
                  </li>
                  <li className="count mt8">
                    <span>수량</span>
                    {fruit.stock}
                  </li>
                </StyledFruitDetail>
              </div>
            );
          }
          return null;
        })}
      </Flex>
      <StyledButtonWrap>
        <MainButton backgroundColor="lightgray">빼기</MainButton>
        {prime ? (
          <MainButton backgroundColor="orange">담기</MainButton>
        ) : (
          <MainButton backgroundColor="yellow">담기</MainButton>
        )}
      </StyledButtonWrap>
    </StyledFruitBox>
  );
};

export default FruitBox;

const StyledFruitBox = styled.div`
  width: 416px;
  height: 240px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  position: relative;
  padding: 32px 0;
  box-sizing: border-box;
`;
const Prime = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  line-height: 23px;
  color: ${theme.colors.orange};
  position: absolute;
  top: 12px;
  left: 16px;
`;
const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  > div {
    font-size: 100px;
    line-height: 117px;
    font-weight: 700;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledFruitDetail = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 700;
  .fruit {
    font-size: 20px;
    line-height: 23px;
  }
  .price {
    font-size: 16px;
    line-height: 19px;
  }
  .count {
    font-size: 16px;
    line-height: 19px;
    display: flex;
    gap: 8px;
    span {
      color: #727585;
      font-weight: 500;
    }
  }
`;
const StyledButtonWrap = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
