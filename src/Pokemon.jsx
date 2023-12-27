import { useState, useEffect } from 'react';
import FetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = () => {
    const pokemonCards = FetchPokemonAPIData();
    console.log(pokemonCards, 'this is cardsfromapi')
  
    const handleClick = () => {
      console.log('Pokemon clicked!');
    };
  
    return (
      <div>
        {pokemonCards.map((pokemon) => (
          <div key={pokemon.id}>
            <img
              name={pokemon.name}
              id={pokemon.id}
              src={pokemon.sprites.front_default}
              alt="pokemon-images"
              onClick={handleClick}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayPokemon;