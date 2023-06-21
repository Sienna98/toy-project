import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "@/Components/MainPage";
import { down, up } from "@/app/counter-slice";
import { RootState } from "@/app/store";

const HomePage = () => {
  const dispach = useDispatch();
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });

  const handleAddNumber = () => {
    dispach(up(1));
  };

  const handleIsMinusNumber = () => {
    if (count > 0) {
      dispach(down(1));
    }
  };

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
