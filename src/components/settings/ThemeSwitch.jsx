import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const ThemeSwitch = ({activeTheme}) => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
        
    <div className='container my-5'>
      <div className='align-items-center justify-content-center row'>
        <div className='col-2'>
          <label>Select Theme :</label>
        </div>
        <div className='col-2'>
        <select class="form-select" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
        </div>
      </div>
    </div>
    </>
  )
}

export default ThemeSwitch
