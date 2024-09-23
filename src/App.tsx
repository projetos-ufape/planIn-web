import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "./routes/index.routes";
import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FONT } from "./utils/theme";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider>
        <RouterProvider />
        <Toaster
          containerStyle={{
            fontFamily: FONT.body.fontFamily,
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
