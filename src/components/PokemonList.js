import React, { useState } from "react";
import { useSelector } from "react-redux";

const PokemonList = ({ onSelect, selected }) => {
  const pokemons = useSelector((state) => state.pokemon.pokemon);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < pokemons.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelectPokemon = (index) => {
    if (selected === index) {
      // If the selected Pokémon is clicked again, unselect it and select a random one
      let randomIndex = Math.floor(Math.random() * pokemons.length);
      onSelect(randomIndex);
    } else {
      onSelect(index);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedPokemons = pokemons.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-10 sm:grid-cols-5 gap-4">
        {selectedPokemons.map((pokemon, index) => {
          const isSelected = selected === startIndex + index;
          return (
            <div
              key={index}
              className={`cursor-pointer text-center p-4 rounded-lg shadow-md transition-all duration-300 ${
                isSelected ? "bg-green-100" : "bg-white"
              }`}
              onClick={() => handleSelectPokemon(startIndex + index)}
            >
              <img
                className="w-full h-32 object-contain mb-2"
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
              <p
                className={`text-sm font-medium ${
                  isSelected ? "text-green-700" : "text-gray-900"
                }`}
              >
                {pokemon.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-indigo-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <div className="px-4 py-2 bg-indigo-500 text-white rounded disabled:bg-gray-300">
          {currentPage + 1}
        </div>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * itemsPerPage >= pokemons.length}
          className="px-4 py-2 bg-indigo-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
