import { createTheme } from '@mui/material/styles';

const getTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: mode === 'dark' ? '#101010' : '#fff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#333333',
        secondary: mode === 'dark' ? '#cccccc' : '#666666',
      },
    },

    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '2rem',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
};

export default getTheme;
