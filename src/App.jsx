import HomePage from "./routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import LoginPage from "./routes/login/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./routes/register/register";
import ContactPage from "./routes/contact/contact";
import MatchesPage from "./routes/matches/matches";
import EsportsMatch from "./components/esportsMatch/esportsmatch";
import { ErrorPage } from "./components/errors/errors";
ErrorPage;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />, // Error handler for this route
      children: [
        {
          path: "/",
          element: <HomePage />,
          errorElement: <ErrorPage />, // Error handler for this route
        },
        {
          path: "/login",
          element: <LoginPage />,
          errorElement: <ErrorPage />, // Error handler for this route
        },
        {
          path: "/register",
          element: <RegisterPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/matches",
          element: <EsportsMatch />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
