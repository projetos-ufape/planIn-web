import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "./routes/index.routes";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
