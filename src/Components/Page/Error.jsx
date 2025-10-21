import React from "react";
import { Link } from "react-router";
import Header from "../Header";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-violet-500 text-base-content">
      <div className="text-center px-4">
        <h1 className="text-9xl bg-amber-200 p-6 rounded-4xl font-extrabold mb-4 text-accent">
          Oops!
        </h1>
        <p className="text-4xl bg-amber-200 p-6 rounded-4xl font-extrabold mb-4 text-accent">
          404 Not Found
        </p>
        <p className="text-5xl font-bold mb-6">{status}</p>

        <Link to="/" className="btn btn-lg ">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
