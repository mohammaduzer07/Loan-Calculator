import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CurrencyContext = createContext();
let API_KEY = "8fbb42b209509bd5784aa0c8"
export function CurrencyProvider({ children }) {
  const [rates, setRates] = useState({ USD: 1 });
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
      .then(res => setRates(res.data.conversion_rates))
      .catch(err => console.error(err));
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
}