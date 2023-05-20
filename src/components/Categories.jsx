import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryData from "./CategoryData";

const Categories = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState(3);

  useEffect(() => {
    fetch(`http://localhost:5001/category/${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  const handleCategory = (cat) => {
    console.log(cat);
    setCategory(cat);
  };

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-5xl text-center my-8">Customer Loves</h1>

      <div>
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <TabList>
            <Tab>Animal toys</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab onClick={() => handleCategory(1)}>Teddy Bears</Tab>
                <Tab onClick={() => handleCategory(2)}>Dog Toys</Tab>
                <Tab onClick={() => handleCategory(3)}>Cat Toys</Tab>
              </TabList>
              {/* <TabPanel>
                <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                  alt="Homer Simpson"
                />
              </TabPanel> */}
              <TabPanel>
                {toys.map((toy) => (
                  <CategoryData key={toy.id}></CategoryData>
                ))}
              </TabPanel>
              <TabPanel>
                {toys.map((toy) => (
                  <CategoryData key={toy.id}></CategoryData>
                ))}
              </TabPanel>
              <TabPanel>
                {toys.map((toy) => (
                  <CategoryData key={toy.id}></CategoryData>
                ))}
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
