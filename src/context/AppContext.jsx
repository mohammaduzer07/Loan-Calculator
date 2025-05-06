import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [amortizationData, setAmortizationData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        loanAmount,
        setLoanAmount,
        interestRate,
        setInterestRate,
        loanTerm,
        setLoanTerm,
        emi,
        setEmi,
        currency,
        setCurrency,
        amortizationData,
        setAmortizationData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);