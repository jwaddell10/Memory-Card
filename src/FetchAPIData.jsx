import { useState, useEffect } from "react";

const useFetchPokemonAPIData = () => {
    const [data, setData] = useState([]);

      const fetchData = async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10');
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
    return {data, setData, fetchData};
  };

  export default useFetchPokemonAPIData;