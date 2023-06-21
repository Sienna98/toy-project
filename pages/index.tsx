import React from "react";
import MainPage from "@/Components/MainPage";
import useCount from "@/hooks/useCount";

const HomePage = () => {
  const { handleAddNumber, handleIsMinusNumber, count } = useCount();

  return (
    <>
      <MainPage
        onAddNumber={handleAddNumber}
        onMinusNumber={handleIsMinusNumber}
        countInCart={count}
      />
    </>
  );
};

export default HomePage;
