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