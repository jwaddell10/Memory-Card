import { useState, useEffect } from 'react';
import useFetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = () => {
    const cardArray = []
    const {fetchData, data} = useFetchPokemonAPIData();
  
    const handleClick = (id) => {
      console.log(id, 'this is id')
      //save the target, 
      cardArray.push(id)

      const newCards = fetchData()

      const data = newCards
      return data;
    };
  
    return (
      <div>
        {data.map((pokemon) => (
          <div key={pokemon.id}>
            <img
              name={pokemon.name}
              id={pokemon.id}
              src={pokemon.sprites.front_default}
              alt="pokemon-images"
              onClick={() => handleClick(pokemon.id)}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayPokemon;