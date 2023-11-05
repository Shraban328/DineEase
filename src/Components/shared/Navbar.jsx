import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_png.png";
const Navbar = () => {
  const navLinks = (
    <div className="font-semibold flex space-x-3 text-[#161713]">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/explore"}>Explore</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to={"/events"}>Events</NavLink>
      </li>
    </div>
  );
  return (
    <div className="bg-[#FFF2DE] p-8 pb-1">
      <div className="navbar bg-[#FFF2DE]  m-4 max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="flex items-center">
              <img src={logo} alt="" className="w-14" />
              <a className="btn btn-ghost normal-case text-xl font-bold mr-3">
                DineEase
              </a>
            </div>
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
