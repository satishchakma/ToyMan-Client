import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

import { FidgetSpinner } from "react-loader-spinner";

const MyToys = () => {
  const { user, loading, setLoading } = useContext(AuthContext);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user]);
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
  return (
    <div className="container mx-auto my-12">
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
            {/* {toys.map((toy) => (
              <AllToyDetails toy={toy} key={toy._id}></AllToyDetails>
            ))} */}
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
    </div>
  );
};

export default MyToys;
