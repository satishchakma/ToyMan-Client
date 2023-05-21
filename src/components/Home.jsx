import React from "react";
import Categories from "./Categories";
import ClientsMarquee from "./ClientsMarquee";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <GallerySection></GallerySection>
      <Categories></Categories>
      <FaqSection></FaqSection>
      <ClientsMarquee></ClientsMarquee>
    </div>
  );
};

export default Home;
