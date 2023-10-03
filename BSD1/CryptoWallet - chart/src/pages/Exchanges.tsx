import axios from "axios"
import React, { useEffect, useState } from "react"

const Exchanges = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/exchanges")
      .then(function (response: any) {
        setData(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  console.log(data)

  return (
    <>
      {data ? data.data.data.map((item) => (
        <p>{item.exchangeId}</p>
      )) : <></>}
    </>
  )
}

export default Exchanges
