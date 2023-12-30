import { useState, useEffect } from 'react';
import useFetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = () => {
    const [cardArray, setCardArray] = useState([]);
    const {setData, fetchData, data} = useFetchPokemonAPIData();
    let i = data.length;
    console.log(i, 'this is i')
    while (--i > 0) {
      let temp = Math.floor(Math.random() * (i + 1));
            [data[temp], data[i]] = [data[i], data[temp]];
    }
    //to rerender onclick

    const handleClick = (pokemon) => {
      console.log(pokemon, 'this is poke i clicked')

      //render all of the pokemon, in random orders
    }

    const checkForMatches = (id) => {
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


      //if no match, i need to re render
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
                checkForMatches(pokemon.id);
                handleClick(pokemon);}}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayPokemon;