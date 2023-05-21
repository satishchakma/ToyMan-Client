import React from "react";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateModal = (props) => {
  const { _id, price, quantity, details } = props;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const quantity = form.quantity.value;
    const price = form.price.value;
    const details = form.details.value;

    const updatedToy = {
      price,
      quantity,
      details,
    };

    console.log(updatedToy);

    // send data to the server
    fetch(`https://toyman-server.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("🦄 Product data updated!!", {
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
  };

  return (
    <div>
      {/* modal here */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`${_id}`} className="modal-toggle" />
      <label htmlFor={`${_id}`} className="modal cursor-pointer">
        <label className="modal-box relative w-full max-w-5xl" htmlFor="">
          {/* inside modal  */}
          <div>
            <div>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                  <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#f3f3f3]">
                    <form
                      onSubmit={() => handleUpdate(event)}
                      className="card-body"
                    >
                      <div className="form-control">
                        <h1 className="text-4xl text-center my-3">
                          Update A Toy
                        </h1>
                        <p className="text-center mb-3">
                          Please update a toy using the details bellow.
                        </p>

                        <label className="label">
                          <span className="label-text">Price</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Price $"
                          className="input input-bordered"
                          name="price"
                          defaultValue={price}
                        />

                        <label className="label">
                          <span className="label-text">Available quantity</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Available quantity "
                          className="input input-bordered"
                          name="quantity"
                          defaultValue={quantity}
                        />
                        <label className="label">
                          <span className="label-text">Detail description</span>
                        </label>
                        <textarea
                          name="details"
                          className="h-24"
                          defaultValue={details}
                        ></textarea>
                      </div>

                      <div className="form-control mt-6">
                        <button className="btn bg-[#4acdd5] border-none w-1/2 rounded-full">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </label>
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

export default UpdateModal;
