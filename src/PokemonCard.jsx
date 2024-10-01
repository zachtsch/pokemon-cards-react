import React, { useEffect, useState } from "react";

// Color mapping for Pokémon types
const typeColors = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  flying: "#A890F0",
};

const PokemonCard = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  // Get the primary type of the Pokémon
  const primaryType = pokemonData.types[0].type.name;

  // Set the background color based on the primary type
  const backgroundColor = typeColors[primaryType] || "#f8f8f8"; // default color if type is not in typeColors

  return (
    <div style={{ ...styles.card, backgroundColor }}>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} style={styles.image} />
      <h3>{pokemonData.name}</h3>
      <p>Type: {pokemonData.types.map((typeInfo) => typeInfo.type.name).join(", ")}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Height: {pokemonData.height}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "150px",
    margin: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
  },
};

export default PokemonCard;
