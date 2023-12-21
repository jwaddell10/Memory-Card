import { useState, useEffect } from 'react';
const Fetch = () => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon-form/?limit=10&offset=10');
        const data = await response.json();
        console.log(data);

        const pokemonCharacters = data.results;
        setCards(pokemonCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      {cards.map((card) => (
        <h3 key={card.name}>{card.name}</h3>
      ))}
    </>
  );
};
export default Fetch;