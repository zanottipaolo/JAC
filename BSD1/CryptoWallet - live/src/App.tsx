import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Exchange from "./pages/Exchange"
import Assets from "./pages/Assets"
import Settings from "./pages/Settings"
import { createContext, useEffect, useState } from "react"

export const SettingsContext = createContext({
  username: "",
  handleUsername: ({}) => {},
})

function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") ?? "Paolo"
  )

  const handleUsername = (event: any) => {
    setUsername(event.target.value)
    // localStorage.setItem("username", username)
  }

  useEffect(() => {
    localStorage.setItem("username", username)
  }, [username])

  return (
    <SettingsContext.Provider
      value={{ username: username, handleUsername: handleUsername }}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/exchange' element={<Exchange />} />
          <Route path='/assets' element={<Assets />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </SettingsContext.Provider>
  )
}
export default App
