import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
function Settings() {
  const {theme, active} = useContext(ThemeContext)
  return (
    <div className="pt-5">
      <h1>Settings</h1>

               Active Theme: {active}
    </div>
  )
}

export default Settings
