import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const listSlice = createSlice({
    name:"list",
    initialState,
    reducers: {
        setDefaultPage: (state) => {
            state.page = 1
        },
        addPage: (state) => {
            state.page += 1
        }
    }

});

export const { setDefaultPage , addPage} = listSlice.actions;
export const selectPage = (state) => state.list.page;

export default listSlice.reducer;

