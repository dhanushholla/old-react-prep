import React, { createContext, useState } from 'react'

const ThemeContext = createContext();
export const ThemeContextProvider = ({children}) => {
    const [theme,changeTheme]=useState('light')
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext