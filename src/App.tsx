import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import Home from './pages/home';
import getTheme from './theme';
import { Brightness7, Brightness4 } from '@mui/icons-material';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const theme = getTheme(mode);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{
          marginLeft: 'auto',
          display: 'block',
          marginTop: '10px',
          marginRight: '10px',
        }}
      >
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
