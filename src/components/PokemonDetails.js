import React from "react";

const PokemonDetails = ({ pokemon }) => {
  const { name, base_experience, height, weight, moves, abilities, stats } =
    pokemon;
  const image = pokemon.sprites.other["official-artwork"].front_default;

  const displayedMoves = moves.slice(0, 7);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:h-48 md:w-48"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <p className="mt-2 text-gray-500">
            Base Experience: {base_experience}
          </p>
          <p className="mt-2 text-gray-500">Height: {height} decimetres</p>
          <p className="mt-2 text-gray-500">Weight: {weight} hectograms</p>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Moves</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {displayedMoves.map((moveObj, index) => (
                <span
                  key={index}
                  className="inline-block bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {moveObj.move.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Abilities</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {abilities.map((abilityObj, index) => (
                <span
                  key={index}
                  className="inline-block bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {abilityObj.ability.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Stats</h3>
            <div className="space-y-2 mt-2">
              {stats.slice(0, 3).map((statObj, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-700 w-32">
                    {statObj.stat.name}:
                  </span>
                  <div className="w-full bg-gray-200 rounded-full h-4 ml-2">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: `${statObj.base_stat}%` }}
                    ></div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    {statObj.base_stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
