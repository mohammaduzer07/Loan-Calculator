import { createContext, useContext } from 'react';
import { useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Add this export for the useTheme hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};



// import React, { createContext, useState } from "react";
// import { createTheme } from "@mui/material/styles";

// export const ThemeContext = createContext();

// export default function ThemeContextProvider({ children }) {
//   const [mode, setMode] = useState("light");

//   const toggleTheme = () => {
//     setMode(prev => (prev === "light" ? "dark" : "light"));
//   };

//   const theme = createTheme({
//     palette: {
//       mode,
//     },
//   });

//   return (
//     <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

