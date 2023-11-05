import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
