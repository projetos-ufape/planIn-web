import { Box, TextField } from "@mui/material";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Box>
        <TextField label="Testinho" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
