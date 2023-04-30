import { ChangeEvent, createContext, useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import PokemonInfo from "./PokemonInfo"

export const PokemonContext = createContext({ response: undefined })

function App() {
  const [currentPokemon, setCurrentPokemon] = useState("")
  const [responseData, setResponseData] = useState()

  const handlePokemon = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPokemon(event.target.value)
  }

  useEffect(() => {
    if (currentPokemon !== "") {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + currentPokemon)
        .then(function (response: any) {
          // handle success
          setResponseData(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  }, [currentPokemon])

  return (
    <PokemonContext.Provider value={{ response: responseData }}>
      <h1 className='title'>Pokedex</h1>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Add pokemon and search */}
      <div className='searchBox'>
        <button>+</button>
        <input
          type='text'
          name='searchPokemon'
          onChange={(e) => handlePokemon(e)}
        />
      </div>

      {/* Pokemon info */}
      <div className='pokemonInfo'>
        <PokemonInfo />
      </div>
    </PokemonContext.Provider>
  )
}

export default App
