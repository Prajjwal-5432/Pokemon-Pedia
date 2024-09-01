import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/Pokemon/pokemonSlice";

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
