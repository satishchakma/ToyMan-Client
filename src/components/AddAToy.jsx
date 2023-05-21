import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState("");
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
    console.log(value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photoURL.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const category = selectedValue;
    let price = form.price.value;
    price = parseFloat(price);
    const toyRating = rating.toString();
    const quantity = form.quantity.value;
    const details = form.details.value;

    const newToy = {
      photo,
      name,
      sellerName,
      email,
      category,
      price,
      toyRating,
      quantity,
      details,
    };

    console.log(newToy);

    // send data to the server
    fetch("http://localhost:5001/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("🦄 Data added. Thank you!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    form.reset();
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#f3f3f3]">
              <form onSubmit={handleAddToy} className="card-body">
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
                    defaultValue={user?.displayName}
                    placeholder="Seller Name"
                    className="input input-bordered"
                    name="sellerName"
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
                    defaultValue={user?.email}
                    required
                  />

                  <label className="label">
                    <span className="label-text">Sub-category</span>
                  </label>

                  <select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    defaultValue={"DEFAULT"}
                    className="select select-bordered"
                    // name="category"
                  >
                    <option value="DEFAULT" disabled>
                      Sub-category
                    </option>
                    <option value="1">Teddy bear</option>
                    <option value="2">Dog </option>
                    <option value="3">Cat</option>
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
                    <span className="label-text">Rating</span>
                  </label>
                  <div>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FontAwesomeIcon
                        key={value}
                        className={`star ${value <= rating ? "selected" : ""}`}
                        onClick={() => handleRatingClick(value)}
                        icon={faStar}
                      />
                    ))}
                  </div>
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
                  <textarea name="details" className="h-24"></textarea>
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

export default AddAToy;
