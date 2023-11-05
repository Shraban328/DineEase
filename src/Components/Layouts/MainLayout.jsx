import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
