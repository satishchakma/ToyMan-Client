import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    // desktop menubar
    <div>
      <div className="navbar bg-base-100 container mx-auto my-6">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="gap-5 mr-5 text-lg">
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={`/alltoys`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            All Toys
          </NavLink>
          <NavLink
            to={`/mytoys`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            My Toys
          </NavLink>
          <NavLink
            to={`/addatoy`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add A Toy
          </NavLink>
          <NavLink
            to={`/blogs`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blogs
          </NavLink>
        </div>
        <div className="flex-none ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <UserCircleIcon />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
