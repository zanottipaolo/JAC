import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      label: "Prova1",
      status: false,
    },
    {
      id: 1,
      label: "Prova2",
      status: false,
    },
    {
      id: 2,
      label: "Prova3",
      status: false,
    },
  ])

  // Add
  setItems([
    ...items,
    {
      id: 6,
      label: "vfefe",
      status: false,
    },
  ])

  // Delete
  setItems(items.filter((item) => item.id !== id))

  // Update
  setItems(
    items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: false,
        }
      } else {
        return item
      }
    })
  )

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
