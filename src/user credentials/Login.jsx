import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../hooks/usetitle";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  useTitle("Login");
  const { signIn, googleSignIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    form.reset();
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#f3f3f3]">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h1 className="text-4xl text-center my-3">Login</h1>
                <p className="text-center mb-3">
                  Please login using account detail bellow.
                </p>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <p className="text-[#d70e0e]">{error}</p>
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    New to <span className="font-semibold">ToyMan</span>? Create
                    Account here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#4acdd5] border-none w-1/2 rounded-full">
                  Login
                </button>
              </div>
            </form>

            <p className="text-center">OR</p>
            <div
              onClick={handleGoogleSignIn}
              className="m-4 bg-[#14b8a6] border-0 btn text-center flex justify-center items-center gap-4"
            >
              <div className="p-3">{/* <FcGoogle /> */}</div>
              <h3>Continue with Google</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
