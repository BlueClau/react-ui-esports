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
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
          errorElement: <ErrorPage />,
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
          element: <MatchesPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
