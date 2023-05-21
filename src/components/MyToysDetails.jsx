import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useEffect } from "react";

const MyToysDetails = (props) => {
  const singleToy = props.toy;
  const { _id, setDetails, details, price } = props.toy;

  const { user } = useContext(AuthContext);

  const [updateData, setUpdateData] = useState({});
  const [updateId, setUpdateId] = useState("");

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This product is deleted", "success");
              const remaining = details.filter((toy) => toy._id !== _id);
              setDetails(remaining);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5001/toy/${updateId}`)
      .then((res) => res.json())
      .then((data) => setUpdateData(data));
  }, [updateId, updateData]);

  const sendId = (id) => {
    handleUpdate(id);
    setUpdateId(id);
  };

  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={singleToy.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>
        <div className="font-bold">{singleToy.sellerName}</div>
      </td>
      <td>{singleToy.name}</td>
      <td>
        {singleToy.category == 1
          ? "Teddy Bear"
          : singleToy.category == 2
          ? "Dog Toy"
          : "Cat Toy"}
      </td>
      <td>$ {singleToy.price}</td>
      <td>{singleToy.quantity}</td>

      <th>
        <label
          htmlFor="my-modal-4"
          onClick={() => sendId(_id)}
          className="btn btn-warning text-white btn-xs"
        >
          Update
        </label>
        {/* modal here */}
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative w-full max-w-5xl" htmlFor="">
            {/* inside modal  */}
            <div>
              <div>
                <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#f3f3f3]">
                      <form
                        onSubmit={() => handleUpdate(_id)}
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
                            defaultValue={updateData?.price}
                          />

                          <label className="label">
                            <span className="label-text">
                              Available quantity
                            </span>
                          </label>
                          <input
                            type="number"
                            placeholder="Available quantity "
                            className="input input-bordered"
                            name="quantity"
                          />
                          <label className="label">
                            <span className="label-text">
                              Detail description
                            </span>
                          </label>
                          <textarea name="details" className="h-24"></textarea>
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
          </label>
        </label>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 border-0 text-white btn-xs"
        >
          Delete
        </button>
      </th>
      {/* modal here */}
      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-4" className="btn">
        open modal
      </label> */}
    </tr>
  );
};

export default MyToysDetails;
