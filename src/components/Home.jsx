import React from "react";
import useTitle from "../hooks/usetitle";
import Categories from "./Categories";
import ClientsMarquee from "./ClientsMarquee";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  useTitle("Home");
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
