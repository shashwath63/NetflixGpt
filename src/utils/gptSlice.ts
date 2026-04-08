import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isGptView: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.isGptView = !state.isGptView;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
