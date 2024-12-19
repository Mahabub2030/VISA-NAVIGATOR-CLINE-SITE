
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(Authcontext);

  const handleLogOut = () => {
    userLogOut();
  };

  const links = (
    <>
      <li className="text-lg font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to="/AllVisa">All Visas</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to="/AddVisa">Add Visa</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to="/MyAddedVisa">My Added Visas</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to="/MyVisaApplication">My Visa Applications</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-gray-900 text-gray-200 p-4 shadow-lg">
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
              className="menu menu-sm dropdown-content mt-3 w-52 bg-gray-800 rounded-lg p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold ml-2">
            VISA NAVIGATOR
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="avatar cursor-pointer">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      alt="User Avatar"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-48 text-gray-200"
                >
                  <li className="px-2 py-1">
                    <span>{user.displayName || user.email}</span>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-ghost w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-x-3">
              <Link to="/login">
                <button className="btn btn-outline btn-primary">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-secondary">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;




