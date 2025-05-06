import { useCallback } from 'react';

export const useAmortization = () => {
  const generateAmortization = useCallback((principal, annualRate, years, emi) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    let balance = principal;
    const schedule = [];

    for (let month = 1; month <= months; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = emi - interest;
      balance -= principalPayment;

      schedule.push({
        month,
        principal: principalPayment,
        interest,
        balance: balance > 0 ? balance : 0,
      });
    }

    return schedule;
  }, []);

  return { generateAmortization };
};