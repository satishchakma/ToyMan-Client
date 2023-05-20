import React from "react";
import Categories from "./Categories";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <GallerySection></GallerySection>
      <Categories></Categories>
    </div>
  );
};

export default Home;
