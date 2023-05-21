import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

import { FidgetSpinner } from "react-loader-spinner";
import MyToysDetails from "./MyToysDetails";
import UpdateModal from "./UpdateModal";
import useTitle from "../hooks/usetitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user, loading } = useContext(AuthContext);

  const [details, setDetails] = useState([]);
  const [view, setView] = useState(1);

  useEffect(() => {
    fetch(`https://toyman-server.vercel.app/toys/${user?.email}&${view}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [user, details]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      </div>
    );
  }

  const handleSelectChange = (event) => {
    let value = parseInt(event.target.value);
    setView(value);
  };
  return (
    <div className="container mx-auto my-12">
      <label className="label">
        <span className="label-text">Sort by Price</span>
      </label>

      <select
        // value={selectedValue}
        onChange={handleSelectChange}
        defaultValue={"DEFAULT"}
        className="select select-bordered my-5"
        // name="category"
      >
        <option value="DEFAULT" disabled>
          Sort By Price
        </option>
        <option value="1">Low to high</option>
        <option value="-1">High to low </option>
      </select>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price </th>
              <th>Available Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {details.map((toy) => (
              <MyToysDetails
                toy={toy}
                key={toy._id}
                details={details}
                setDetails={setDetails}
              ></MyToysDetails>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price </th>
              <th>Available Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <UpdateModal></UpdateModal>
    </div>
  );
};

export default MyToys;
