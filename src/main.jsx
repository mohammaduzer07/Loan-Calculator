import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/theme.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import ReactDOM from "react-dom/client";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { CurrencyProvider } from "./context/CurrencyContext";
// // import ThemeContextProvider from "./context/ThemeContext";
// import ThemeContextProvider from "/src/context/ThemeContext.jsx"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <CurrencyProvider>
//       <ThemeContextProvider>
//         <CssBaseline />
//         <App />
//       </ThemeContextProvider>
//     </CurrencyProvider>
//   </StrictMode>,
// )
