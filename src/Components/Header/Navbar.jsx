import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../../assets/Photo/Resturant Logo.png';
import { AuthContent } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const { User, LogOutUser } = useContext(AuthContent);

  const Links = (
    <div className="md:flex items-center gap-3 md:gap-7 md:text-lg font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AllFoods">All Foods</NavLink>
      <NavLink to="/Gallery">Gallery</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/ContactUs">Contact US</NavLink>
    </div>
  );

  return (
    <nav className="navbar flex justify-between items-center bg-[#E69138] py-2 text-white">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5"
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
            className="menu menu-sm dropdown-content bg-[#E69138] rounded-box z-[1] mt-3  p-2 shadow"
          >
            <li>{Links}</li>
          </ul>
        </div>
        <a className=" w-32 md:w-44">
          <img src={LogoImage} alt="logo" />
        </a>
      </div>
      <div className="hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="">
        {User && (
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button  ">
                <img
                  className="w-14 h-14 border rounded-full "
                  src={User?.photoURL}
                  alt=""
                />
              </label>
            </div>
            <div className="drawer-side z-20">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 font-bold">
                {/* Sidebar content here */}
                <div className="mb-5 flex gap items-center">
                  <img
                    className="w-14 h-14 border-2 border-yellow-500 rounded-full mx-2"
                    src={User?.photoURL}
                    alt=""
                  />
                  <p className="text-yellow-600 text-lg">
                    {User?.displayName || 'User Name'}
                  </p>
                </div>

                <Link to="/AddFood">
                  <li>
                    <a>Add Food</a>
                  </li>
                </Link>

                <Link to="/MyFoods">
                  <li>
                    <a>My Foods</a>
                  </li>
                </Link>

                <Link to="/MyOrders">
                  <li>
                    <a>My Orders</a>
                  </li>
                </Link>

                <button
                  onClick={LogOutUser}
                  className="btn mt-10 bg-[#E69138] text-white font-bold"
                >
                  Log Out
                </button>
              </ul>
            </div>
          </div>
        )}

        {!User && (
          <Link to="/Login">
            <a className="btn text-[#E69138] font-bold">Login</a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
