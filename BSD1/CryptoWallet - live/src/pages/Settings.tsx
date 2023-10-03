import React, { useContext } from "react"
import { SettingsContext } from "../App"

const Settings = () => {
  const { username, handleUsername } = useContext(SettingsContext)
  return (
    <div>
      <input type='text' name='username' id='username' onChange={(event) => handleUsername(event)} />
    </div>
  )
}

export default Settings
