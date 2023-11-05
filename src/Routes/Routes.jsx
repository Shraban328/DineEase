import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default Routes;
