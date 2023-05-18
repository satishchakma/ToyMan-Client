import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#f3f3f3]">
              <form className="card-body">
                <div className="form-control">
                  <h1 className="text-4xl text-center my-3">Add A Toy</h1>
                  <p className="text-center mb-3">
                    Please add a toy using the details bellow.
                  </p>
                  <label className="label">
                    <span className="label-text">Picture URL of the toy</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="photoURL"
                  />

                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    value={user?.displayName}
                    placeholder="Seller Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Seller Email"
                    className="input input-bordered"
                    name="email"
                    value={user?.email}
                    required
                  />

                  <label className="label">
                    <span className="label-text">Sub-category</span>
                  </label>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Sub-category
                    </option>
                    <option>T-shirts</option>
                    <option>Mugs</option>
                    <option>wow</option>
                  </select>

                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price $"
                    className="input input-bordered"
                    name="price"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Available quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Available quantity "
                    className="input input-bordered"
                    name="quantity"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Detail description</span>
                  </label>
                  <textarea className="h-24"></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#4acdd5] border-none w-1/2 rounded-full">
                    Add a toy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
