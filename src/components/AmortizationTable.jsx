import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box
} from '@mui/material';
import { useAppContext } from '../context/AppContext';

const AmortizationTable = () => {
  const { amortizationData, currency, setAmortizationData } = useAppContext();

  if (!amortizationData.length) return null;

  const handleReset = () => {
    setAmortizationData([]);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Amortization Schedule ({currency})
      </Typography>
      <TableContainer 
        component={Paper}
        sx={{ 
          maxHeight: 500,
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '0.4em',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            borderRadius: '10px',
          }
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Principal</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {amortizationData.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell>
                  {row.principal.toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {row.interest.toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {row.balance.toFixed(2)} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AmortizationTable;