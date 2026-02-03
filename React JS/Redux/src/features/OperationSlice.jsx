import { createSlice } from "@reduxjs/toolkit";

const OperationSlice = createSlice({
    name: 'operation',
    initialState: { value: 0 },
    reducers: {
        ADD: (state, action) => {
            state.value = state.value + action.payload;
        },
        SUB: (state, action) => {
            state.value = state.value - action.payload;
        }
    }
})

export const { ADD, SUB } = OperationSlice.actions;
export default OperationSlice.reducer;