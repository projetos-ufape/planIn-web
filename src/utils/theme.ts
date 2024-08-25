import { PaletteMode, ThemeOptions } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#FFF8F7",
            paper: "#"
          },
          primary: {
            main: "#904A46",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#775654",
            contrastText: "#FFFFFF",
          },
          text: {
            primary: "#231919",
            secondary: "#857371",
          },
        }
      : {
          background: {
            default: "#1A1111",
            paper: "#382E2D"
          },
          primary: {
            main: "#FFB3AE",
            contrastText: "#571E1C",
          },
          secondary: {
            main: "#E7BDB9",
            contrastText: "#E7BDB9",
          },
          text: {
            primary: "#F1DEDD",
            secondary: "#A08C8A",
          },
        }),
    error: {
      main: "#BA1A1A",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#6BF178",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
  },
});

export const COLORS = {
  light: {
    background: "#FFF8F7",
    primary: "#904A46",
    secondary: "#775654",
    text: {
      primary: "#231919",
      secondary: "#857371",
    },
  },
  dark: {
    background: "#1A1111",
    primary: "#FFB3AE",
    secondary: "#E7BDB9",
    text: {
      primary: "#F1DEDD",
      secondary: "#A08C8A",
    },
  },
  error: "#BA1A1A",
  success: "#6BF178",
  white: "#FFFFFF",
  black: "#000000",
  green: "#1F8970",
  blue: "#1F4389",
  brown: "#895F1F",
  purple: "#68428E",
  red: "#89251F",
};

export const FONT = {
  display: {
    fontFamily: "Poppins",
    lg: {
      size: 57,
      lineHeight: 64,
      letter: -0.25,
    },
    md: {
      size: 45,
      lineHeight: 52,
    },
    sm: {
      size: 36,
      lineHeigt: 44,
    },
  },
  headline: {
    fontFamily: "Poppins",
    lg: {
      size: 32,
      lineHeight: 40,
    },
    md: {
      size: 28,
      lineHeight: 36,
    },
    sm: {
      size: 24,
      lineHeigt: 32,
    },
  },
  title: {
    fontFamily: "Ubuntu",
    lg: {
      size: 22,
      lineHeight: 28,
    },
    md: {
      size: 16,
      lineHeight: 24,
      letter: 0.15,
      weight: 500,
    },
    sm: {
      size: 14,
      lineHeight: 20,
      letter: 0.1,
      weight: 500,
    },
  },
  label: {
    fontFamily: "Ubuntu",
    lg: {
      size: 14,
      lineHeight: 20,
      letter: 0.1,
      weight: 500,
    },
    md: {
      size: 12,
      lineHeight: 16,
      letter: 0.5,
      weight: 500,
    },
    sm: {
      size: 11,
      lineHeigt: 16,
      letter: 0.5,
      weight: 500,
    },
  },
  body: {
    fontFamily: "Ubuntu",
    lg: {
      size: 16,
      lineHeight: 24,
      letter: 0.5,
    },
    md: {
      size: 14,
      lineHeight: 20,
      letter: 0.25,
    },
    sm: {
      size: 12,
      lineHeigt: 16,
      letter: 0.4,
    },
  },
};
