import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FinanceItemType, FinancesType } from "../types/types";

type FinancesState = {
  incomes: FinanceItemType[];
  outcomes: FinanceItemType[];
};

const initialState: FinancesState = {
  incomes: [],
  outcomes: [],
};

export const financesSlice = createSlice({
  name: "finances",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ type: FinancesType; name: string; amount: number }>) => {
      const { type, name, amount } = action.payload;

      state[type].push({ id: `${name}-${Date.now()}`, name, amount });
    },
  },
});

export const { addItem } = financesSlice.actions;
