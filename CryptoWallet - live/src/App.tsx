import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Exchange from "./pages/Exchange"
import Assets from "./pages/Assets"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/exchange' element={<Exchange />} />
          <Route path='/assets' element={<Assets />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
