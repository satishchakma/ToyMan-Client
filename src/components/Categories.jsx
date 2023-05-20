import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryData from "./CategoryData";

const Categories = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

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
                <Tab>Teddy Bears</Tab>
                <Tab>Dog Toys</Tab>
                <Tab>Cat Toys</Tab>
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
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
