import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cubicM: 1,
    thousandCubicM: 2,
    millionCubicM: 3,
    billionCubicM: 4
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // todo
  }
});

// eslint-disable-next-line import/no-default-export
export default dataSlice.reducer;