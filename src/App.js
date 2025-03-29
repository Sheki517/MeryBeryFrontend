import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import both AuthProvider and useAuth
import Dashboard from './components/Dashboard/Dashboard';
import FarmList from './components/Dashboard/FarmList';
import Login from './components/Login/Login';

const theme = createTheme({
  palette: {
    primary: { main: '#FF69B4' }, // Hot pink
    secondary: { main: '#FFB6C1' }, // Light pink
    background: { default: '#FFF0F5', paper: '#FFFFFF' },
  },
  components: {
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none', backgroundColor: '#FFFFFF' } },
    },
  },
});

function AppRoutes() {
  const { user, loading } = useAuth(); // Now inside <AuthProvider>

  if (loading) return <p>Loading...</p>; // Avoids rendering before authentication is checked

  return (
    <Router>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #FFF0F5 0%, #FFFFFF 100%)', padding: '20px 0' }}>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/farms/:flowerType" element={user ? <FarmList /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider> {/* Now AppRoutes is correctly inside <AuthProvider> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes /> {/* Ensures authentication is set before calling useAuth() */}
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;