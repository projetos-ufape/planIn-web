import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "./routes/index.routes";
import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider />
        </AuthProvider>
        <Toaster />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
