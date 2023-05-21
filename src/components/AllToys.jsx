import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../hooks/usetitle";
import AllToyDetails from "./AllToyDetails";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://toyman-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  // useEffect(() => {
  //   searchItems(searchTerm);
  // }, [searchTerm]);

  const handlesearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // Perform search logic here, such as making an API call or filtering data
    console.log("Searching for:", event.target.value);
    // searchItems(event.target.value);
  };
  const searchItems = (term) => {
    console.log("term", term);
    fetch(`https://toyman-server.vercel.app/toys/search/${term}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetch(`https://toyman-server.vercel.app/toys/search/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setToys(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      fetch("https://toyman-server.vercel.app/toys")
        .then((res) => res.json())
        .then((data) => setToys(data));
    }
  }, [searchTerm]);

  return (
    <div className="container mx-auto my-12">
      <div className="search w-full flex my-8">
        <div className="w-1/2"></div>
        <form className="w-1/2 form-control ">
          <div className="input-group flex justify-end items-end ">
            <input
              type="text"
              name="search"
              onChange={handlesearch}
              placeholder="Search by Toy name..."
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
            {toys.map((toy) => (
              <AllToyDetails toy={toy} key={toy._id}></AllToyDetails>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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

export default AllToys;
