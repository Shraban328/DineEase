import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import AddFood from "../Components/Pages/AddFood/AddFood";
import MyFoods from "../Components/Pages/MyFoods/MyFoods";
import Explore from "../Components/Pages/Explore/Explore";
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
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/add-food",
        element: <AddFood />,
      },
      {
        path: "/my-foods",
        element: <MyFoods />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },
]);
export default Routes;
