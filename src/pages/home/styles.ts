import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Height, VerticalAlignBottom } from "@mui/icons-material";

export const useCustomStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.mode === "dark" ? "white" : "red",
    "& p": {
      color: theme.palette.mode === "dark" ? "lightgreen" : "green",
      "& span": {
        color: "blue",
      },
    },

    overflow: "hidden",
  },

  custom_container: {
    padding: "0px 60px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 20px",
    },
    minHeight: "100vh",
  },
  custom_input: {
    width: "100%",
    padding: "20px",
    background: theme.palette.mode === "dark" ? "#0f0f12" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    borderColor: theme.palette.mode === "dark" ? "#eeeeee45" : "#ccc",
    border: "1px solid ",
    borderRadius: "25px",
    marginBottom: "30px",
  },

  main_content: {
    maxWidth: "500px",
    margin: "auto",
    width: "100%",
    background: theme.palette.mode === "dark" ? "#000" : "#fff",
    padding: "20px",
    border: "1px solid ",
    borderColor: theme.palette.mode === "dark" ? "#eeeeee45" : "#ccc",
    borderRadius: "25px",
    overflow: "hidden",
    backdropFilter: "blur(5px)",
    [theme.breakpoints.down("md")]: {
      padding: "105x",
    },
  },

  box_warp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  button_submit: {
    width: "100% !impotant",
    maxWidth: "100% !important",
    marginLeft: "auto",
  },

  select_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  resultRate: {
    fontSize: "30px",
    color: theme.palette.mode === "dark" ? "#fff" : "#333",
    marginRight: "auto",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      marginTop: "20px",
    },
    "& span": {
      fontSize: "15px !important",
      fontWeight: "400",
      paddingRight: "20px",
      VerticalAlign: "middle",
      color: theme.palette.mode === "dark" ? "#eeeeeeb0" : "#333",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },

  min_text: {
    fontSize: "15px",
    marginBottom: "10px",
  },

  swap_icon: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "#0866ff !important"
        : "#0866ff29 !important ",
    maxWidth: "maxContent",
    margin: "12px auto 5px !important",
    display: "block",
  },

  flag: {
    width: "40px",
    height: "30px",
    overflow: "hidden",
    flexShrink: "0",
    marginRight: "10px",
    borderRadius: "3px",

    "& img": {
      width: "100%",
      Height: "100%",
      objectPosition: "center",
      objectFit: "cover",
    },
  },
}));
