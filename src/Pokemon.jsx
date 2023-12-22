import { useState, useEffect } from 'react';
const Fetch = () => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        console.log(data, 'this is data');
        
        const pokemonUrls = data.results.map((pokemon) => pokemon.url)
        console.log(pokemonUrls, 'this is url')
        
        
          setCards(data);
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