import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: number;
  value: number;
};

const initialState: InitialState = {
  id: 1,
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    up: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        value: state.value + action.payload,
      };
    },
    down: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        value: state.value - action.payload,
      };
    },
    // init: (state) => {
    //   return {
    //     ...state,
    //     value: 0,
    //   };
    // },
  },
});

export default counterSlice;
export const { up, down } = counterSlice.actions;
