import React from "react";
import { useState } from "react";

const AllToyDetails = (props) => {
  const singleToy = props.toy;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
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
        <button className="btn btn-accent text-white btn-xs">
          View details
        </button>
      </th>
    </tr>
  );
};

export default AllToyDetails;
