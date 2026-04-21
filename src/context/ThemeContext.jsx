import React, { createContext, useContext } from 'react';
import { useTheme } from '../hooks/UseTheme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeState = useTheme();

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
