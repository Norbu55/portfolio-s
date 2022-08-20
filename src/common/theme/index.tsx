// import { ThemeProvider, Theme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "55px",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "55px",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "45px",
    },
    h4: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "45px",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "55px",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "55px",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "30px",
    },
  },
  palette: {
    primary: {
      main: "#290001",
      light: "#DBCBBD",
    },
    secondary: {
      main: "#87431D",
      light: "#C87941",
    },
  },
});
