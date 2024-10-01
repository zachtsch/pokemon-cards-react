import React, { useEffect, useState } from "react";

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

  return (
    <div style={styles.card}>
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
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100px",
    height: "100px",
  },
};

export default PokemonCard;
