// HandOfCards.js
import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

export const HandOfCards = () => {
  const [pokemonIds, setPokemonIds] = useState([1, 4, 7]); // Default Pokémon IDs: Bulbasaur, Charmander, Squirtle

  return (
    <div style={styles.hand}>
      {pokemonIds.map((pokemonId) => (
        <PokemonCard key={pokemonId} pokemonId={pokemonId} />
      ))}
    </div>
  );
};

const styles = {
  hand: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default HandOfCards;
