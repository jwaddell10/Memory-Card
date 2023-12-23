import { useState, useEffect } from 'react';
const DisplayPokemon = () => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        
        const pokemonUrls = data.results.map((pokemon) => pokemon.url)
        
        const pokemonDetailsPromise = pokemonUrls.map( async (url) => {
            const response = await fetch(url)
            const pokemonData = await response.json()
            return pokemonData;
        });
        
        const pokemonDetails = await Promise.all(pokemonDetailsPromise);
        console.log(pokemonDetails, 'this is details')

        setCards(pokemonDetails);
        return pokemonDetails
          //console.log(pokemonData, 'this is pokedata')
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
    fetchData();
  }, [setCards]);

  const HandleClick = () => {
    console.log('you clicked me')
  }
  

  return (
    
    <div>
        {cards.map((pokemon, index) => (
            <img 
                key={index}
                src={pokemon.sprites.front_default}
                alt="pokemon-images"
                onClick={HandleClick}
            />
        ))}
    </div>
  );
};

export default DisplayPokemon;