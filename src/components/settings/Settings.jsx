import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeSwitch from './ThemeSwitch';
function Settings() {
  const {theme, active} = useContext(ThemeContext)
  return (
    <div className="pt-5">
      <h1 className='my-4'>Settings</h1>

               Active Theme: {active}
               <ThemeSwitch />
    </div>
  )
}

export default Settings
