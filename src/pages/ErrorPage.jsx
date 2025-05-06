import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography paragraph sx={{ mb: 4 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/"
          size="large"
        >
          Go to Home Page
        </Button>
      </Paper>
    </Container>
  );
};

export default ErrorPage;