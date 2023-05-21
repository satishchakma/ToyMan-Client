import React from "react";

const MyToys = () => {
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
