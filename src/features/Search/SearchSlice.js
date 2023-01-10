import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  searchQuery: "",
  isLoading: false,
  errorMessge: null,
};

export const searchSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addSearchResults: (state, action) => {
      state.searchResults = state.searchResults.concat(action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setDefaultList: (state) => {
      state.searchResults = [];
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setErrorMessage: (state, action) => {
      state.errorMessge = action.payload;
    },
  },
});

export const {
  addSearchResults,
  setSearchQuery,
  setDefaultList,
  setLoading,
  setErrorMessage,
} = searchSlice.actions;

export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectIsLoading = (state) => state.search.isLoading;
export const selectErrorMessage = (state) => state.search.errorMessge;

export default searchSlice.reducer;
