import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "./routes/index.routes";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;
