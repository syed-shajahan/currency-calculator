import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useCustomStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.mode === 'dark' ? 'white' : 'red',
    '& p': {
      color: theme.palette.mode === 'dark' ? 'lightgreen' : 'green',
      '& span': {
        color: 'blue',
      },
    },
  },

  custom_container: {
    padding: '60px',
    minHeight: '100vh',
  },
  custom_input: {
    width: '100%',
    padding: '20px',
    border: '1px solid #EEE',
  },

  main_content: {
    maxWidth: '500px',
    margin: 'auto',
    width: '100%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    overflow: 'hidden',
    backdropFilter: 'blur(5px)',
  },

  box_warp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  button_submit: {
    width: '100% !impotant',
    maxWidth: '100% !important',
    margin: 'auto',
  },
}));
