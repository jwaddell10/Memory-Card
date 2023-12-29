import { useState, useEffect } from 'react';
import useFetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = () => {
    const [cardArray, setCardArray] = useState([]);
    const {setData, fetchData, data} = useFetchPokemonAPIData();
    
    const handleClick = (id) => {
      //save the target, 
      cardArray.push(id)
      const newCards = fetchData()
      setCardArray(...data, id)
      console.log(setCardArray, 'this is setCardArray')

      //function to check if id exists in array
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
              onClick={() => {
                handleClick(pokemon.id);
                console.log(cardArray, 'this is cardarray');
            }}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayPokemon;