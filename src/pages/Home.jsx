import { Box, Container, Typography } from '@mui/material';
import LoanForm from '../components/LoanForm';
import AmortizationTable from '../components/AmortizationTable';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { emi } = useAppContext();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Loan Calculator Dashboard
        </Typography>
        <LoanForm />
        {emi && <AmortizationTable />}
      </Box>
    </Container>
  );
};

export default Home;