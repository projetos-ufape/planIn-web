import React, { useEffect } from "react";
import {
  Box,
  createTheme,
  PaletteMode,
  ThemeProvider as Provider,
} from "@mui/material";
import { createContext, ReactNode } from "react";
import { getDesignTokens } from "../utils/theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
        <Box padding={0} minHeight={"100vh"} flex={1} bgcolor={theme.palette.background.default} >
          {children}
        </Box>
      </Provider>
    </ColorModeContext.Provider>
  );
};
