import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#77d1df",
    },
    secondary: {
      main: "#e3e3e3",
    },
    success: {
      main: "#00b176",
    },

    warning: {
      main: "#ffcc43",
    },

    error: {
      main: red.A400,
    },
  },
});
