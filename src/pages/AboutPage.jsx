import { Box, Container, Typography, Link, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About This App
        </Typography>
        <Typography paragraph>
          This Loan Calculator App is a modern, single-page web application built using 
          React JS and Material UI. It allows users to calculate loan EMIs (Equated Monthly 
          Installments), view a detailed amortization schedule, and see real-time currency 
          conversions of their EMI using live exchange rates.
        </Typography>
        
        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Features
        </Typography>
        <ul>
          <li><Typography>Loan EMI calculation using standard financial formulas</Typography></li>
          <li><Typography>Dynamic amortization schedule table with monthly breakdown</Typography></li>
          <li><Typography>Real-time currency conversion of EMI using a live exchange rate API</Typography></li>
          <li><Typography>Dark/Light mode toggle for a customizable experience</Typography></li>
          <li><Typography>Fully responsive UI built with Material UI</Typography></li>
        </ul>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Technologies Used
        </Typography>
        <ul>
          <li><Typography>React (Hooks, Routing, Context API)</Typography></li>
          <li><Typography>Material UI for styling and responsive components</Typography></li>
          <li><Typography>Axios for API calls</Typography></li>
          <li><Typography>Exchange Rate API for real-time currency conversion</Typography></li>
        </ul>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          EMI Formula Used
        </Typography>
        <Typography paragraph>
          The EMI (Equated Monthly Installment) is calculated using the standard formula:
          <br />
          EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
          <br />
          Where:
          <br />
          P = Principal loan amount
          <br />
          R = Monthly interest rate (annual rate / 12 / 100)
          <br />
          N = Loan duration in months
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Deployment
        </Typography>
        <Typography paragraph>
          This app is deployed at: <Link href="#" target="_blank">Live Deployment Link</Link>
          <br />
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;