import logo from "./logo.svg"
import "./App.css"
import { createContext, useState } from "react"
import Header from "./Header"

export const ThemeContext = createContext({ _theme: "light", toggle: () => {} })

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ _theme: theme, toggle: toggleTheme }}>
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Header />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
