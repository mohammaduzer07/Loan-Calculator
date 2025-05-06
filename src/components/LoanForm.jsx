import { useState, useContext } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { useEMICalculator } from '../hooks/UseEMICalculator';
import {useAmortization} from '../hooks/useAmortization'
import { useAppContext } from '../context/AppContext';

const LoanForm = () => {
  const {
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
    setAmortizationData,
  } = useAppContext();

  const { calculateEMI } = useEMICalculator();
  const { generateAmortization } = useAmortization();

  const handleCalculate = () => {
    const calculatedEMI = calculateEMI(loanAmount, interestRate, loanTerm);
    setEmi(calculatedEMI.toFixed(2));

    const amortizationSchedule = generateAmortization(
      loanAmount,
      interestRate,
      loanTerm,
      calculatedEMI
    );
    setAmortizationData(amortizationSchedule);
  };

  const handleReset = () => {
    setEmi(null);
    setAmortizationData([]);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Loan Amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Interest Rate (%)"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Term (Years)"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleCalculate}
        >
          CALCULATE
        </Button>
      </Box>

      {emi && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Monthly EMI: {currency} {emi}
          </Typography>
          <Box sx={{ mt: 2, textAlign: 'right' }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleReset}
        >
          RESET TABLE
        </Button>
      </Box>
          <FormControl sx={{ mt: 2, mb: 2 }}>
            <InputLabel>Currency</InputLabel>
            <Select
              value={currency}
              label="Currency"
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
              {/* Add more currencies as needed */}
            </Select>
          </FormControl>
        </Box>
      )}
    </Paper>
  );
};

export default LoanForm;