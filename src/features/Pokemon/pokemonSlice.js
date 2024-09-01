import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

export const { fetchData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
