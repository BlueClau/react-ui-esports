import HomePage from "./routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import LoginPage from "./routes/login/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./routes/register/register";
import ContactPage from "./routes/contact/contact";
import MatchesPage from "./routes/matches/matches";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/matches",
          element: <MatchesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
