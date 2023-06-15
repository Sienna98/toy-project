import React, { useState } from "react";
import Header from "@/Components/Header";
import MainPage from "@/Components/MainPage";

const HomePage = () => {
  const [isAddNumber, setIsAddNumber] = useState(0);

  const handleIsAddNumber = () => {
    setIsAddNumber(isAddNumber + 1);
    console.log("clicked");
  };
  return (
    <>
      <Header isAddNumber={isAddNumber} />
      <MainPage handleIsAddNumber={handleIsAddNumber} />
    </>
  );
};

export default HomePage;
