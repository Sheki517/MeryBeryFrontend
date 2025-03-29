import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import FarmList from './components/FarmList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Hot pink
    },
    secondary: {
      main: '#FFB6C1', // Light pink
    },
    background: {
      default: '#FFF0F5', // Lavender blush
      paper: '#FFFFFF', // White
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#FFFFFF',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #FFF0F5 0%, #FFFFFF 100%)',
          padding: '20px 0'
        }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/farms/:flowerType" element={<FarmList />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
