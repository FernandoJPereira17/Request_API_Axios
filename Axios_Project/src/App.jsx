import { useEffect, useState } from "react"
import './App.css'
import pokemonInstance from "./helper/axios-instance";
import useAxios from "./hook/user-axios";

function App() {

  const [ pokemonList, loading, error ] = useAxios({
    axiosInstance: pokemonInstance,
    method: 'GET',
    url:'pokemon',
})

const [ pokedex, loadingPokedex, errorPokedex ] = useAxios({
  axiosInstance: pokemonInstance,
  method: 'GET',
  url:'pokedex',
})

  if(loading){
    return <div>Loading</div>  
  }
  if(error){
    return <div>{error}</div>
  }

  return (
    <>
    <div>
        {
        pokemonList.results.map((pokemon, index) => 
        <div key={index}>{pokemon.name}</div>
        )
        }
    </div>

    <div>
        {
        pokedex.results.map((pokedex, index) => 
        <div key={index}>{pokedex.name}</div>
        )
        }
    </div>
    </>
    
  )
}

export default App;
