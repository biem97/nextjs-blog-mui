import { PaletteMode, ThemeOptions } from "@mui/material";
import { teal, blue, grey, lightBlue, blueGrey } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: lightBlue,
          secondary: blueGrey,
          divider: blueGrey[800],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: blue,
          secondary: lightBlue,
          divider: lightBlue[800],
          // background: {
          //   default: blue[900],
          //   paper: blue[900],
          // },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default getDesignTokens;
