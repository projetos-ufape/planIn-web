import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "./routes/index.routes";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
