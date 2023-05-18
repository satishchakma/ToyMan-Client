import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://www.shopdisney.com/on/demandware.static/Sites-shopDisney-Site/-/default/dw8cd1c386/images/error-image.png"
        alt=""
      />
      <h2 className="text-center text-4xl font-medium">
        Oops, Page Not Found!
      </h2>
      <Link to="/">
        <button className="btn btn-accent text-white">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
