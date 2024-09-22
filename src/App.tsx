import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "./routes/index.routes";
import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CategoryProvider } from "./context/CategoryProvider";
import { FONT } from "./utils/theme";
import { TaskProvider } from "./context/TaskProvider";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider>
        <AuthProvider>
          <CategoryProvider>
            <TaskProvider>
              <RouterProvider />
            </TaskProvider>
          </CategoryProvider>
        </AuthProvider>
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
