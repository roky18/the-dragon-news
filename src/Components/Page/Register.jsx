import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (r) => {
    r.preventDefault();
    // console.log(r.target);
    const from = r.target;
    const name = from.name.value;
    if (name.length < 5) {
      setNameError("Name shoud be More ");
      return;
    } else {
      setNameError("");
    }
    const photoUrl = from.photoUrl.value;
    const email = from.email.value;
    const password = from.password.value;

    // console.log({ name, photoUrl, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })

          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        // ..
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-teal-500 font-bold">
              Register your account
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="Text"
                    className="input"
                    placeholder="Your Name"
                    required
                  />

                  {nameError && <p className="text-red-500">{nameError}</p>}

                  {/* photoUrl*/}
                  <label className="label">Photo Url</label>
                  <input
                    name="photoUrl"
                    type="Text"
                    className="input"
                    placeholder="Your photo Url"
                    required
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  {/* password */}
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />

                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                  <p className="flex justify-center pt-3">
                    Already Have An Account ?{" "}
                    <Link
                      to="/auth/login"
                      className="text-green-500 font-semibold"
                    >
                      Please Login
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

export default Register;
