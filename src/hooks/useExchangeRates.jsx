import { useState, useEffect } from 'react';
import axios from 'axios';

export const useExchangeRates = (apiKey, baseCurrency) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
        );
        setRates(response.data.conversion_rates);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRates(null);
      } finally {
        setLoading(false);
      }
    };

    if (apiKey) {
      fetchRates();
    }
  }, [apiKey, baseCurrency]);

  return { rates, loading, error };
};