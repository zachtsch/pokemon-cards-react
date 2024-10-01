import React, { useEffect, useState } from "react";
import Draggable, {DraggableCore} from 'react-draggable'; 
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

  // Get the primary and secondary types of the Pokémon
  const primaryType = pokemonData.types[0].type.name;
  const secondaryType = pokemonData.types[1]?.type.name;

  // Set the background color based on the types
  const backgroundColor = secondaryType
    ? `linear-gradient(135deg, ${typeColors[primaryType]}, ${typeColors[secondaryType]})`
    : typeColors[primaryType] || "#f8f8f8"; // fallback for single type or unknown types

  // Drag event handlers
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", pokemonId); // Store the Pokémon ID during drag
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <Draggable id="draggable">
    <div
      style={{ ...styles.card, background: backgroundColor }}
      className="pokemon-card"
      draggable="true" // Enable dragging
      onDragStart={handleDragStart} // Handle drag start
    >
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} style={styles.image} />
      <h3>{pokemonData.name}</h3>
      <p>Type: {pokemonData.types.map((typeInfo) => typeInfo.type.name).join(", ")}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Height: {pokemonData.height}</p>
    </div>
    </Draggable>
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
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transition for hover effect
    cursor: "pointer", // Change cursor to pointer for better UX
  },
  image: {
    width: "100px",
    height: "100px",
  },
};

export default PokemonCard;
