import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleCategoryDataDetails = () => {
  const dataId = useParams();

  console.log(dataId);
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5001/singleDataDetails/${dataId.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(details);
  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  );
};

export default SingleCategoryDataDetails;
