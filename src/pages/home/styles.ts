import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material/styles';

export const useCustomStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.mode === "dark" ? "white" : "red",
    "& p": {
      color: theme.palette.mode === "dark" ? "lightgreen" : "green",
      "& span": {
        color: "blue",
      },
    },
  },

  custom_container: {
    padding: "60px",
    minHeight: '100vh',
  },

  main_content: {
    maxWidth: "500px",
    margin: "auto",
    width: "100%",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "25px",
    overflow: "hidden",
    backdropFilter:'blur(5px)'
  },
}));
