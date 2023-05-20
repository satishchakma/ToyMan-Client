import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCategoryData = (props) => {
  const { photo, name, price, toyRating, _id } = props.toy;
  //   console.log(_id);
  const { user } = useContext(AuthContext);

  const handlePrivateRoute = () => {
    if (!user) {
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      alert("You have to log in first to view details");
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl text-left">
        <figure>
          <img src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">Price: $ {price}</p>

          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <FontAwesomeIcon
                key={value}
                className={`star ${value <= toyRating ? "selected" : ""}`}
                icon={faStar}
              />
            ))}
          </div>
          <Link
            to={`/singleDataDetails/${_id}`}
            className="card-actions justify-start"
          >
            <button
              onClick={() => handlePrivateRoute()}
              className="btn btn-accent text-white"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleCategoryData;
