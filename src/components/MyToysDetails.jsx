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
import UpdateModal from "./UpdateModal";

const MyToysDetails = (props) => {
  const singleToy = props.toy;
  const { _id, setDetails, details, price, quantity } = props.toy;

  const { user } = useContext(AuthContext);

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
        fetch(`https://toyman-server.vercel.app/toy/${_id}`, {
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
          htmlFor={`${_id}`}
          onClick={() => sendId(_id)}
          className="btn btn-warning text-white btn-xs"
        >
          Update
        </label>
        <UpdateModal
          _id={_id}
          price={price}
          quantity={quantity}
          details={details}
        ></UpdateModal>
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
