import { useState, useEffect } from "react"
import axios from "axios"

const Asset = () => {
  const [values, setValues] = useState("")
  const [responseData, setResponseData] = useState()

  const handleChange = (event: any) => {
    setValues(event.target.value)
  }

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets/" + values)
      .then(function (response: any) {
        setResponseData(response)
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.error(error)
      })
  }, [values])

  return (
    <div>
      <input onChange={(event) => handleChange(event)} type='text'></input>
      {responseData?.data.data.symbol}
    </div>
  )
}

export default Asset
