import { useState, useEffect } from 'react';
import useFetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = () => {
    const [cardArray, setCardArray] = useState([]);
    const {setData, fetchData, data} = useFetchPokemonAPIData();
    
    const randomizeCardsOnClick = () => {
      let i = data.length;
      while (--i > 0) {
      let temp = Math.floor(Math.random() * (i + 1));
            [data[temp], data[i]] = [data[i], data[temp]];
    }
    }

    //end the gameonclick if there's a match
    //click and dont match, i++ score
    //style

    const checkForMatches = (id) => {
  
      //check for matches
      const previousCards = [...cardArray]
      const clickedCardId = id;

      let matching = false;

      previousCards.forEach((card) => {
        if (card === clickedCardId) {
          matching = true;
          console.log('its a match')
          return matching = true;
        } 
        
        if (!matching) {
          matching = false;
          console.log('its not a match')
          return matching = false;
        }
      })

      let allCardsArray = [...cardArray, id]
      setCardArray(allCardsArray)


      //if no match, i need to re render
    };

    return (
      <div className='pokemonimagescontainer'>
        {data.map((pokemon) => (
          <div key={pokemon.id}
               className='pokemonimages'>
            <img
              name={pokemon.name}
              id={pokemon.id}
              src={pokemon.sprites.front_default}
              alt="pokemon-images"
              onClick={() => {
                checkForMatches(pokemon.id);
                randomizeCardsOnClick();}}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayPokemon;