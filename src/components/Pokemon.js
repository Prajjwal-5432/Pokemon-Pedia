import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/Pokemon/pokemonSlice";
import PokemonDetails from "./PokemonDetails";
import PokemonList from "./PokemonList";

const url = "https://pokeapi.co/api/v2/pokemon";

const Pokemon = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState("");
  const [selected, setSelected] = useState(-1);

  const fetchPokemons = async () => {
    setIsLoading(true);

    const pokemons = await axios.get(`${url}/?limit=50`);

    const promises = pokemons.data.results.map(async (pokemon) => {
      const details = await axios.get(`${url}/${pokemon.name}`);
      return { name: pokemon.name, ...details.data };
    });

    const results = await Promise.all(promises);
    dispatch(fetchData(results));

    const randomIndex = Math.floor(Math.random() * results.length);
    setSelected(randomIndex);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pokemons = useSelector((state) => state.pokemon.pokemon);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <h1 className="text-3xl">Pokemon Pedia</h1>
      <div className="flex-grow overflow-y-auto w-full">
        {isLoading && <p>Loading...</p>}
        {pokemons && selected !== -1 && (
          <PokemonDetails pokemon={pokemons[selected]} />
        )}
        {pokemons && (
          <PokemonList
            pokemons={pokemons}
            onSelect={setSelected}
            selected={selected}
          />
        )}
      </div>
    </div>
  );
};

export default Pokemon;
