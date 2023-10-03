import axios from "axios"
import React, { useEffect, useState } from "react"

const Exchange = () => {
  const [responseData, setResponseData] = useState()

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/exchanges")
      .then(function (response: any) {
        setResponseData(response)
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  return (
    <>
      <ul>
        {responseData !== undefined &&
          responseData.data.data.map((exchange: any) => (
            <li key={exchange.exchangeId}>
              <a href={exchange.exchangeUrl}>{exchange.name}</a>
            </li>
          ))}
      </ul>
    </>
  )
}

export default Exchange
