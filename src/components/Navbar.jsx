import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  //console.log(user);
  const userMail = user?.email;
  console.log(userMail);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  //console.log(user);
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
            to={`/mytoys/`}
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

        <div className="mr-4">
          {user?.photoURL ? (
            <div className="avatar">
              <div className=" w-12 rounded-full ">
                <img
                  className="tooltip tooltip-open tooltip-bottom tooltip-error"
                  data-tip={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
          ) : (
            <div className="avatar">
              <div className="w-12 rounded-full">
                <UserCircleIcon />
              </div>
            </div>
          )}
        </div>

        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-accent  text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-accent text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
