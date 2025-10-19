import React, { use } from "react";
import { Link, NavLink } from "react-router";
import users from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-6 text-accent font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-2">
        <img src={users} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-6">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
