import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const ThemeSwitch = ({activeTheme}) => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
        <label className={`mx-4 text-${activeTheme}`}>Select theme: {theme}</label>
        <select class="form-select w-25" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    </>
  )
}

export default ThemeSwitch
