import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        name : '',
        monthlyBudget : '',
        categoricalBudget : {
            food : '',
            travel : '',
            entertainment : '',
            others : '',
        }
    },
    reducers : {
        setBudget : (state, action) => {
            return {...state, ...action.payload}
        },
    }
});

export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;