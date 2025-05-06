import { AppBar, Toolbar, Typography, Button, Switch, useTheme as muiUseTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // custom hook

const Header = () => {
  const { darkMode, toggleTheme } = useTheme(); // custom theme context
  
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/exchange-rates">
          Exchange Rates (Live)
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/error">
          Error Page
        </Button>
        <Switch 
          checked={darkMode} 
          onChange={toggleTheme} 
          color="secondary" 
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;