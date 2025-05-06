import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './pages/Home';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import getTheme from './styles/theme';

function AppWrapper() {
  const { darkMode } = useTheme(); // Now this is inside ThemeProvider

  return (
    <MuiThemeProvider theme={getTheme(darkMode)}>
      <AppProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </AppProvider>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React, { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoanForm from "./components/LoanForm";
// import ErrorPage from "./components/ErrorPage";
// import { ThemeProvider } from "@mui/material/styles";
// import { ThemeContext } from "./context/ThemeContext";
// import { Container } from "@mui/material";

// function App() {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <Container maxWidth="md" sx={{ py: 4 }}>
//           <Routes>
//             <Route path="/" element={<LoanForm />} />
//             <Route path="*" element={<ErrorPage />} />
//           </Routes>
//         </Container>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App
