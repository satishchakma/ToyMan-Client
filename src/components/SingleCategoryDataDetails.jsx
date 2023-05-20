import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleCategoryDataDetails = () => {
  const dataId = useParams();

  console.log(dataId);
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5001/toy/${dataId.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(details);
  return (
    <div className="container mx-auto my-12 flex gap-5">
      <div className="single-toy w-1/2">
        <img src={details.photo} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl mb-4">{details.name}</h1>
        <p className="font-normal text-xl mb-4">
          Seller: <span> {details.sellerName}</span>
        </p>
        <p className=" text-xl mb-4">
          Seller Email: <span> {details.email}</span>
        </p>
        <p className=" text-2xl font-semibold mb-4">
          <span className="text-[#4acdd5]"> ${details.price} USD</span>
        </p>

        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <FontAwesomeIcon
              key={value}
              className={`star ${value <= details.toyRating ? "selected" : ""}`}
              icon={faStar}
            />
          ))}
        </div>
        <p className=" text-xl font-semibold my-4">
          <span>Quantity: {details.quantity}</span>
        </p>
        <p className=" text-xl font-semibold mb-4">
          <span>Description: {details.details}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleCategoryDataDetails;
