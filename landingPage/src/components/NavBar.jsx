import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <nav className="navbar bg-neutral-800 flex justify-between items-center py-5 px-20">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className="flex items-center gap-8 text-base text-neutral-200">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Feature</Link>
        </li>
        <li>
          <Link to="/">Pricing</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Link className="text-indigo-500 font-semibold">Log In</Link>
        <button className="bg-indigo-500 font-semibold px-3 py-2 rounded-sm text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
