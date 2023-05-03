import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      LAYOUT
      
      <header>
        <nav>
          <ul className = "nav-bar">
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/exchange'>Exchange</NavLink>
            </li>
            <li>
                <NavLink to='/assets'>Asset</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Layout
