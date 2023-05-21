import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysDetails = (props) => {
  const singleToy = props.toy;
  const { _id, setDetails, details } = props.toy;

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
        <Link to={`/singleDataDetails/${_id}`}>
          <button className="btn btn-warning text-white btn-xs">Update</button>
        </Link>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 border-0 text-white btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToysDetails;
