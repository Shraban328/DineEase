import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_png.png";
import useAuth from "../../utilities/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logout Successfull");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <div className="font-semibold flex  xl:flex-row md:w-52 space-x-3 text-[#361e31]">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        {user ? (
          <NavLink to={"/explore"}>Explore</NavLink>
        ) : (
          <NavLink to={"/login"}>Explore</NavLink>
        )}
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box xl:w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center">
            <img src={logo} alt="" className="w-14" />
            <a className="btn text-[#361e31] btn-ghost normal-case md:text-lg xl:text-xl font-bold mr-3">
              DineEase
            </a>
          </div>
          <div className="hidden lg:flex md:gap-9 xl:gap-0 items-center">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="flex gap-2 items-center mr-2">
              <p className="font-semibold text-lg text-[#361e31]">
                {user?.displayName}
              </p>

              <div className="dropdown dropdown-end dropdown-hover">
                <label tabIndex={0} className="m-1">
                  <div className="w-14 rounded-xl">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="text-[#361e31] font-semibold  hover:bg-[#361e31]  rounded-lg">
                    <Link className="hover:text-gray-300" to={"/my-foods"}>
                      My added food items
                    </Link>
                  </li>
                  <li className="text-[#361e31] font-semibold  hover:bg-[#361e31]  rounded-lg">
                    <Link className="hover:text-gray-300" to={"/add-food"}>
                      Add a food item
                    </Link>
                  </li>
                  <li className="text-[#361e31] font-semibold  hover:bg-[#361e31]  rounded-lg">
                    <Link className="hover:text-gray-300" to={"/my-orders"}>
                      My ordered food items
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#361e31] p-3 rounded-lg font-semibold text-white"
            >
              logout
            </button>
          ) : (
            <>
              <Link
                to={"/login"}
                className="bg-[#361e31] p-3 rounded-lg font-semibold text-white"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
