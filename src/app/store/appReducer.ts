import { combineReducers } from "@reduxjs/toolkit";
import { financesSlice } from "../../shared/model/financesSlice";

export const appReducer = combineReducers({
  [financesSlice.reducerPath]: financesSlice.reducer,
});
