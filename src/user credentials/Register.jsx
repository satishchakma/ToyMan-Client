import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // setUser(loggedUser);
        // navigate(from, { replace: true });
        toast.success("🦄 Account created! Welcome aboard", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
        // setError(error.message);
      });
    form.reset();
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#f3f3f3]">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <h1 className="text-4xl text-center my-3">Create Account</h1>
                  <p className="text-center mb-3">
                    Please Register using account detail bellow.
                  </p>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
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
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="photoURL"
                  />
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account? Login here
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#4acdd5] border-none w-1/2 rounded-full">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Register;
