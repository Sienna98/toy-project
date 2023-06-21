import { useDispatch, useSelector } from "react-redux";
import { down, up } from "@/app/counter-slice";
import { RootState } from "@/app/store";

const useCount = () => {
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
  return { handleAddNumber, handleIsMinusNumber, count };
};
export default useCount;
