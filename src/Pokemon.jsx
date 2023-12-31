import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetchPokemonAPIData from './FetchAPIData';
const DisplayPokemon = ({ updateScore, setNewHighScore  }) => {
  const [cardArray, setCardArray] = useState([]);
  const [isMatching, setIsMatching] = useState(false);
  const { setData, fetchData, data } = useFetchPokemonAPIData();

  const randomizeCardsOnClick = () => {
    let i = data.length;
    while (--i > 0) {
      let temp = Math.floor(Math.random() * (i + 1));
      [data[temp], data[i]] = [data[i], data[temp]];
    }
  };

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
      console.log('It\'s a match');
      console.log(updateScore, 'this is updatescore')

      return;
    }

    updateScore();
    setNewHighScore();

    // If no match, update state and continue
    let allCardsArray = [...cardArray, id];
    setIsMatching(false);
    randomizeCardsOnClick();
    setCardArray(allCardsArray);

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
};
  
  export default DisplayPokemon;