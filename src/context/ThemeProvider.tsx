import React, { useEffect } from "react";
import {
  Box,
  createTheme,
  PaletteMode,
  ThemeProvider as Provider,
  Theme,
} from "@mui/material";
import { createContext, ReactNode } from "react";
import { getDesignTokens } from "../utils/theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {}, theme: {} as Theme, mode: "light"  as 'light' | 'dark' });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
      theme: theme,
      mode: mode
    }),
    [mode, theme]
  );


  useEffect(() => {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if( prefersColorScheme.matches ) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider theme={theme}>
        <Box padding={0} display="flex" minHeight={"100vh"} flex={1} bgcolor={theme.palette.background.default} >
          {children}
        </Box>
      </Provider>
    </ColorModeContext.Provider>
  );
};
