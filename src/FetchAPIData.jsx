import { useState, useEffect } from "react";

const FetchPokemonAPIData = () => {
    const [data, setData] = useState([]);

      const fetchData = async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
          const data = await response.json();
          
          const pokemonUrls = data.results.map((pokemon) => pokemon.url)
          
          const pokemonDetailsPromise = pokemonUrls.map( async (url) => {
              const response = await fetch(url)
              const pokemonData = await response.json()
              return pokemonData;
          });
  
          const pokemonDetails = await Promise.all(pokemonDetailsPromise);
          setData(pokemonDetails);
          return pokemonDetails
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

    useEffect(() => {
        fetchData()
    }, []);
    return data;
  };

  export default FetchPokemonAPIData;