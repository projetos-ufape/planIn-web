import React from "react";
import {
  createTheme,
  PaletteMode,
  ThemeProvider as Provider,
} from "@mui/material";
import { createContext, ReactNode } from "react";
import { getDesignTokens } from "../utils/theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider theme={theme}>{children}</Provider>
    </ColorModeContext.Provider>
  );
};
