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
  const previousCards = [...cardArray];
  const clickedCardId = id;

  let matching = false;

  previousCards.forEach((card) => {
    matching = card === clickedCardId ? true : matching;
  });

  if (matching) {
    console.log('It\'s a match');
    setIsMatching(true);
    setNewHighScore();
    resetScore();
    setCardArray([]);
  } else {
    console.log('Not a match');
    updateScore();
    let allCardsArray = [...cardArray, id];
    setIsMatching(false);
    randomizeCardsOnClick();
    setCardArray(allCardsArray);
  }
};
  
  return (
    <div className='pokemonimagescontainer'>
      {data.map((pokemon) => (
        <div key={pokemon.id} className='pokemonimages'>
          <div className="grayBackground">
          <img
            name={pokemon.name}
            id={pokemon.id}
            src={pokemon.sprites.front_default}
            alt="pokemon-images"
            onClick={() => {
              checkForMatches(pokemon.id)
            }}
          />
          </div>
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