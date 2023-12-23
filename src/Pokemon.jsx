import { useState, useEffect } from 'react';
const Fetch = () => {
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
      
        const pokemonDetails = await pokemonDetailsPromise;
        
        setCards(pokemonDetails);
          //console.log(pokemonData, 'this is pokedata')
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
    fetchData();
  }, []);

  return (
    <div></div>
  );
};

export default Fetch;