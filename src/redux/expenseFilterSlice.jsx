import { createSlice } from "@reduxjs/toolkit";

const expenseFilterSlice = createSlice({
    name : 'filter',
    initialState : {
        filterStatus : "All",
    },
    reducers : {
        filterChange : (state, action) => {
            state.filterStatus = action.payload;
        }
    }
});

export const { filterChange } = expenseFilterSlice.actions;
export default expenseFilterSlice.reducer;