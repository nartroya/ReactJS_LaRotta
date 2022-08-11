import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeDarkMode = createContext ();

const DarkMode = ({children}) => {
    const [dMode, setdMode] = useState(false);
    
    
  return (
    <ThemeDarkMode.Provider value={{dMode, setdMode}}>
        {children}
    </ThemeDarkMode.Provider>
  )
}

export default DarkMode;