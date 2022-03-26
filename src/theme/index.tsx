import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

//@mui
import { createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  useMediaQuery,
} from "@mui/material";

// Util
import getDesignTokens from "./util/getDesignTokens";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(prefersDarkMode);

  useEffect(() => {
    const mode = localStorage.getItem("mode") === "true";
    setIsDarkMode(mode);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setIsDarkMode(prevMode => {
          const nextMode = !prevMode;
          localStorage.setItem("mode", `${nextMode}`);

          return nextMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => {
    const mode = isDarkMode ? "dark" : "light";
    return createTheme(getDesignTokens(mode));
  }, [isDarkMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
