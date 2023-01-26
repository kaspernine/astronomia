import { createSlice } from "@reduxjs/toolkit";

export const astresSlice = createSlice({
  name: "astres",
  initialState: {
    astres: [],
    categories: [],
    select: "",
    range: 36,
    showDetails: false,
    row: "",
  },
  reducers: {
    setAstresData: (state, action) => {
      state.astres = action.payload;
    },
    setCategoriesData: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedRadio: (state, action) => {
      state.select = action.payload;
    },
    setRangeValue: (state, action) => {
      state.range = action.payload;
    },
    setShow: (state, action) => {
      state.showDetails = action.payload;
    },
    setSelectedRow: (state, action) => {
      state.row = action.payload;
    },
  },
});

export const {
  setAstresData,
  setCategoriesData,
  setSelectedRadio,
  setRangeValue,
  setShow,
  setSelectedRow,
} = astresSlice.actions;
export default astresSlice.reducer;
