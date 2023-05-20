import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCategoryData from "./SingleCategoryData";

const CategoryData = (props) => {
  const myToys = props.toys;
  //   console.log(myToys);
  return (
    <div className="grid grid-cols-3 gap-5 my-6 categories">
      {myToys.map((toy) => (
        <SingleCategoryData toy={toy}></SingleCategoryData>
      ))}
    </div>
  );
};

export default CategoryData;
