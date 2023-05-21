import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section text-white">
      <div className="flex justify-center items-center w-full h-[800px] flex-wrap">
        <div className="lg:w-1/2 w-full "></div>
        <div className="lg:w-1/2 w-full lg:p-0 p-12  h-full  justify-center flex flex-col">
          <h2>Big Discount</h2>

          <h1 className="text-6xl my-8">KIDS OFFER</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
