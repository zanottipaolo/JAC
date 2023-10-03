import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Exchanges from "./pages/Exchanges"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import Layout from "./pages/Layout"
import Assets from "./pages/Assets"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='exchanges' element={<Exchanges />} />
          <Route path='assets' element={<Assets />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>

        <Route path='/blog' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
