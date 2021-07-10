import './Pokemons.css';
import React from 'react';
import { useState, useEffect } from 'react';


const Pokemons = () => {
  
  const[pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/pokemons')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, []);

  return (
    <div className="pokemons">
      {pokemons && pokemons.map((pokemon) => {
        return (<div key={pokemon.id}>{ pokemon.name.french }</div>)
      })}
    </div>
  );
}

export default Pokemons;
