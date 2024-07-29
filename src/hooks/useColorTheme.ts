import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeProvider";

export default function useColorTheme() {
  return useContext(ColorModeContext);
}
