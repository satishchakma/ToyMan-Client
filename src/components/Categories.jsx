import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTitle from "../hooks/usetitle";
import CategoryData from "./CategoryData";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Categories = () => {
  useTitle("Categories");
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState(1);

  useEffect(() => {
    fetch(`https://toyman-server.vercel.app/category/${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  const handleCategory = (cat) => {
    console.log(cat);
    setCategory(cat);
  };

  return (
    <div className="container mx-auto text-center" data-aos="fade-right">
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
                <CategoryData toys={toys}></CategoryData>
              </TabPanel>
              <TabPanel>
                <CategoryData toys={toys}></CategoryData>
              </TabPanel>
              <TabPanel>
                <CategoryData toys={toys}></CategoryData>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
