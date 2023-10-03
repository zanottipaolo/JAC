import { metaDescription } from "@/config"
import Head from "next/head"
import React, { useState } from "react"

const settings = () => {
  const [count, setCount] = useState(0)

  console.log(metaDescription)

  return (
    <>
      <Head>
        <title>Settings page</title>
        <meta name='description' content={metaDescription} />
      </Head>
      <h1> Pagina delle impostazioni</h1>

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

export default settings
