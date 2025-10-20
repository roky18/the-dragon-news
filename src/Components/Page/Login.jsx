import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, seterror] = useState();
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(`Error: ${errorMessage} (Code: ${errorCode})`);
        // ..
        seterror(errorCode);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-fuchsia-500 font-bold">
              Login Your Account
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  {/* password */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  {error && <p className="text-red-500">{error}</p>}

                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
                  <p className="flex justify-center pt-3">
                    Dont’t Have An Account ?{" "}
                    <Link
                      to="/auth/register"
                      className="text-red-500 font-semibold"
                    >
                      Register
                    </Link>
                  </p>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
