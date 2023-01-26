import { configureStore } from "@reduxjs/toolkit";
import astresReducer from "../feature/astres.slice";

export default configureStore({
  reducer: {
    astres: astresReducer,
  },
});
