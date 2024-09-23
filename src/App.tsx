import { RouterProvider as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { CategoryProvider } from "./context/CategoryProvider";
import { TaskProvider } from "./context/TaskProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider } from "./context/ThemeProvider";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Register from "./pages/Register";
import { Notifications } from "./pages/Notifications";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Toaster } from "react-hot-toast";
import { FONT } from "./utils/theme";
import Login from "./pages/Login";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  console.log("renderizou");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider>
        <AuthProvider>
          <CategoryProvider>
            <TaskProvider>
              <Router router={router} />
            </TaskProvider>
          </CategoryProvider>
        </AuthProvider>
        <Toaster containerStyle={{ fontFamily: FONT.body.fontFamily }} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
