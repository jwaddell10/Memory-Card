import { useState, useEffect } from 'react';
import useFetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = () => {
    const [cardArray, setCardArray] = useState([]);
    const {setData, fetchData, data} = useFetchPokemonAPIData();

    
    const handleClick = (id) => {
      //check for matches
      const previousCards = [...cardArray]
      const clickedCardId = id;

      let matching = false;

      previousCards.forEach((card) => {
        if (card === clickedCardId) {
          matching = true;
          console.log('its a match')
          return
        } 
        
        if (!matching) {
          matching = false;
          console.log('its not a match')

        }
      })
      let allCardsArray = [...cardArray, id]
      setCardArray(allCardsArray)


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
                handleClick(pokemon.id);}}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayPokemon;