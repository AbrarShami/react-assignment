import React, {createContext, useEffect, useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('system');
    const [active, setActive] = useState(theme)

    // Passing the value to this function IF  value is 'systems' than checks which mode is selected in systemsOS, 
    // otherwise just returns the value which we pass. 
    // simply this function resolve, which theme is currenlty systems OS selected if value is 'system'
    // this fucntion will be reused and return value when we want pass the value to apply theme
  const getActiveTheme = (selectedTheme) => {
    if (selectedTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // .matches Returns true and false, if mode is dark returns true
      return prefersDark ? 'dark' : 'light';
    }
    return selectedTheme;
  };

  // passing value to this function and that value will be added as a class to root element of HTML
  const applyTheme = (activeTheme) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(activeTheme);
    setActive(activeTheme);
  };


  // when we there is change in theme value, this useEffect will run and check the 

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (theme === 'system') {
        const activeTheme = getActiveTheme('system');
        applyTheme(activeTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

// On page load, fetches theme from localStorage.
// If no saved theme, than set the 'theme' value to "system".
// Applies that theme right away.
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'system';
    setTheme(storedTheme);
    applyTheme(getActiveTheme(storedTheme));
  }, []);

// when ther is change in theme value, this useEffect runs and pass the value to applytheme funciton and set theme value in localStorage
  useEffect(() => {
    applyTheme(getActiveTheme(theme));
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme, active}}>
        {children}
    </ThemeContext.Provider>
  )
}
