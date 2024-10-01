// HandOfCards.js
import React from "react";
import PokemonCard from "./PokemonCard";

const HandOfCards = () => {
  const pokemonIds = [1, 4, 7, 10, 13]; // Example Pokémon IDs: Bulbasaur, Charmander, Squirtle, Caterpie, Weedle

  return (
    <div style={styles.hand}>
      {pokemonIds.map((pokemonId, index) => (
        <div
          key={pokemonId}
          style={{
            ...styles.cardWrapper,
            transform: `rotate(${index * 20 - 40}deg) translateY(20px) translateX(${index * 40 - 80}px)`, // Rotate and space the cards apart
          }}
        >
          <PokemonCard pokemonId={pokemonId} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  hand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "350px", // Adjust the height of the hand container
    marginTop: "50px",
  },
  cardWrapper: {
    transformOrigin: "bottom center", // Rotates from the bottom center of each card
    position: "absolute",
  },
};

export default HandOfCards;
