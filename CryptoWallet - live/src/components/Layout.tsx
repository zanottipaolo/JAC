import React, { useContext } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { SettingsContext } from "../App"
import { GiHamburgerMenu } from "react-icons/gi"

const Layout = () => {
  const { username } = useContext(SettingsContext)
  const toggleMobile = () => {
    // const desktopMenu = document.getElementById("header")
    const navbar = document.getElementById("navbar")
    const menu = document.getElementById("menu")

    //desktopMenu?.classList.toggle("toggleMenu")
    navbar?.classList.toggle("navbar")
    menu?.classList.toggle("openMenu")
  }

  return (
    <div>
      LAYOUT
      <header id='header'>
        <nav className='navbar' id='navbar'>
          <ul className='nav-bar' id='menu'>
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
            <li>
              <NavLink to='/settings'>Settings</NavLink>
            </li>
          </ul>
        </nav>
        <p>{username}</p>
        <div className='menuMobile' id='menuMobile'>
          <button onClick={toggleMobile}>
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Layout
