import React, { useState } from "react";
import Header from "@/Components/Header";
import MainPage from "@/Components/MainPage";

const HomePage = () => {
  const [isAddNumber, setAddNumber] = useState(0);

  const handleAddNumber = () => {
    setAddNumber(isAddNumber + 1);
  };
  const handleIsMinusNumber = () => {
    if (isAddNumber > 0) {
      setAddNumber(isAddNumber - 1);
    }
  };
  return (
    <>
      <Header countInCart={isAddNumber} />
      <MainPage
        handleAddNumber={handleAddNumber}
        handleMinusNumber={handleIsMinusNumber}
      />
    </>
  );
};

export default HomePage;
