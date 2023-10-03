import { useContext } from "react"
import { PokemonContext } from "./App"

const PokemonInfo = () => {
  const { response } = useContext(PokemonContext)

  console.log("risposta: ", response)

  return (
    <div>
      <img
        src={response === undefined ? "" : response.data.sprites.back_default}
        alt=''
      />
      <p>{response === undefined ? "" : response.data.name}</p>
    </div>
  )
}

export default PokemonInfo
