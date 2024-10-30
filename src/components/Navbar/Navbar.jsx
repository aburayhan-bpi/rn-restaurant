import React from "react";
import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <div>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-1"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/foods">Food</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn bg-gray-100 text-xl">
            RN Restaurant
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/foods">Food</NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
      {navigation.state === "loading" ? (
        <p className="text-center font-bold text-xl">Loading...</p>
      ) : (
        <Outlet></Outlet>
      )}
      <div className="flex justify-center bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Navbar;
