import { useCallback } from 'react';

export const useEMICalculator = () => {
  const calculateEMI = useCallback((principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return emi;
  }, []);

  return { calculateEMI };
};



// export default function useEMICalculator(principal, annualRate, termYears) {
//     const r = annualRate / 12 / 100;
//     const n = termYears * 12;
//     const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
//     return parseFloat(emi.toFixed(2));
//   }