import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Navigation from './components/Navigation';
import BottomNavigation from './components/Footer';
import { Box, createTheme } from '@mui/material';
import Donation from './pages/Donation';
import { Route, Routes } from 'react-router';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navigation />
        <Routes>
          <Route index path="/" element={<Donation />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <BottomNavigation />
      </Box>
    </ThemeProvider>
  );
};

export default App;
