import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField,
  CircularProgress,
  Alert,
  Pagination
} from '@mui/material';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { useAppContext } from '../context/AppContext';
const API_KEY = '8fbb42b209509bd5784aa0c8'
const ExchangeRatesPage = () => {
  const { currency } = useAppContext();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;
  
  // Replace 'YOUR_API_KEY' with your actual API key
  const { rates, loading, error } = useExchangeRates(`${API_KEY}`, currency);

  const filteredRates = rates 
    ? Object.entries(rates).filter(([currencyCode]) => 
        currencyCode.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const paginatedRates = filteredRates.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Live Exchange Rates
        </Typography>
        
        <TextField
          label="Search Currencies"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
        />

        {loading && (
          <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            Error fetching exchange rates: {error}
          </Alert>
        )}

        {rates && (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Currency Code</TableCell>
                    <TableCell align="right">Exchange Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRates.map(([currencyCode, rate]) => (
                    <TableRow key={currencyCode}>
                      <TableCell>{currencyCode}</TableCell>
                      <TableCell align="right">{rate.toFixed(6)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box display="flex" justifyContent="center" mt={3}>
              <Pagination
                count={Math.ceil(filteredRates.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </>
        )}

        {!loading && !error && !rates && (
          <Typography paragraph>
            Exchange rates data not available. Please check your API key.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ExchangeRatesPage;