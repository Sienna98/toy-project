import React, { useState } from "react";
import CartPage from "@/Components/CartPage";
import Header from "@/Components/Header";
import MainPage from "@/Components/MainPage";

const HomePage = () => {
  const [isAddNumber, setAddNumber] = useState(0);
  const [tabButton, setTabButton] = useState<string>("상품목록");

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
  return (
    <>
      <Header
        countInCart={isAddNumber}
        onClickTab={handleClickTab}
        tabButton={tabButton}
      />
      {tabButton === "상품목록" ? (
        <MainPage
          onAddNumber={handleAddNumber}
          onMinusNumber={handleIsMinusNumber}
        />
      ) : (
        <CartPage onMinusNumber={handleIsMinusNumber} />
      )}
    </>
  );
};

export default HomePage;
