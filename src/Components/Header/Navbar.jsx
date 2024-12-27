import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../assets/Photo/Resturant Logo.png';

const Navbar = () => {
  const Links = (
    <div className="md:flex items-center gap-7">
      <NavLink>Home</NavLink>
      <NavLink>All Foods</NavLink>
      <NavLink>Gallery</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact US</NavLink>
    </div>
  );

  return (
    <div className="navbar bg-slate-300 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-4"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className=" w-32 md:w-44">
          <img src={LogoImage} alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
