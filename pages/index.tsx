import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "@/Components/Header";
import MainPage from "@/Components/MainPage";
import Cart from "./cart";

const HomePage = () => {
  const [isAddNumber, setAddNumber] = useState(0);
  const [tabButton, setTabButton] = useState<string>("상품목록");
  const router = useRouter();

  const handleClickTab = (tabName: string) => {
    setTabButton(tabName);
  };
  const handleAddNumber = () => {
    setAddNumber((prev) => prev + 1);
  };
  const handleIsMinusNumber = () => {
    if (isAddNumber > 0) {
      setAddNumber((prev) => prev - 1);
    }
  };
  const cartPageTab = (select: string) => {
    router.replace(`/${select}`);
  };
  return (
    <>
      {tabButton === "상품목록" && (
        <>
          <Header
            countInCart={isAddNumber}
            onClickTab={handleClickTab}
            tabButton={tabButton}
          />
          <MainPage
            onAddNumber={handleAddNumber}
            onMinusNumber={handleIsMinusNumber}
          />
        </>
      )}
      {tabButton === "장바구니" && (
        <Cart
          onMinusNumber={handleIsMinusNumber}
          onClickTab={handleClickTab}
          countInCart={isAddNumber}
          tabButton={tabButton}
          cartPageTab={cartPageTab}
        />
      )}
    </>
  );
};

export default HomePage;
