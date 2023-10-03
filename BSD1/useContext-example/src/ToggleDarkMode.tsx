import React, { useContext } from "react"
import { ThemeContext } from "./App"

interface ToggleDarkModeProps {
  //theme: string
}

const ToggleDarkMode: React.FC<ToggleDarkModeProps> = ({}) => {
  const { _theme, toggle } = useContext(ThemeContext)

  return (
    <div>
      {/* <p>{theme}</p> */}
      <p>{_theme}</p>
      <button onClick={toggle}>CLICK ME</button>
    </div>
  )
}

export default ToggleDarkMode
