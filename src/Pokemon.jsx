import { useState } from 'react';
import PropTypes from 'prop-types';
import useFetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = ({ updateScore, setNewHighScore, resetScore  }) => {
  const [cardArray, setCardArray] = useState([]);
  const [isMatching, setIsMatching] = useState(false);
  const { data } = useFetchPokemonAPIData();

  const randomizeCardsOnClick = () => {
    let i = data.length;
    while (--i > 0) {
      let temp = Math.floor(Math.random() * (i + 1));
      [data[temp], data[i]] = [data[i], data[temp]];
    }
  };

//click, if its a match, when you click again the game restarts.

  const checkForMatches = (id) => {
    // Check for matches
    const previousCards = [...cardArray];
    const clickedCardId = id;

    let matching = false;

    previousCards.forEach((card) => {
      if (card === clickedCardId) {
        matching = true;
      }
    });

    // If a match is found, end the game and update the score
    if (matching) {
      setIsMatching(true);
      setNewHighScore();

      resetScore()
      setCardArray([])
      alert('its a match')
    }


      updateScore();
      let allCardsArray = [...cardArray, id];
      setIsMatching(false);
      randomizeCardsOnClick();
      setCardArray(allCardsArray);
    


    // If no match, update state and continue

    // Continue with any additional logic if needed
  };

  return (
    <div className='pokemonimagescontainer'>
      {data.map((pokemon) => (
        <div key={pokemon.id} className='pokemonimages'>
          <img
            name={pokemon.name}
            id={pokemon.id}
            src={pokemon.sprites.front_default}
            alt="pokemon-images"
            onClick={() => {
              if (isMatching) {
                return;
              } else {
                checkForMatches(pokemon.id);
              }
            }}
          />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

DisplayPokemon.propTypes = {
  updateScore: PropTypes.func.isRequired,
  setNewHighScore: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
};
  
  export default DisplayPokemon;