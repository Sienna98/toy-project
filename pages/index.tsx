import React, { useState } from "react";
import Header from "@/Components/Header";
import MainPage from "@/Components/MainPage";

const HomePage = () => {
  const [isAddNumber, setAddNumber] = useState(0);

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
      <Header countInCart={isAddNumber} />
      <MainPage
        onAddNumber={handleAddNumber}
        onMinusNumber={handleIsMinusNumber}
      />
    </>
  );
};

export default HomePage;
