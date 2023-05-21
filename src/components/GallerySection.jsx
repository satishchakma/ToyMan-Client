import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const GallerySection = () => {
  return (
    <div
      className="my-12 p-2 gallery"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h2 className="text-center text-5xl mb-10  leading-snug">
        We design toys not just for kids <br /> but with kids
      </h2>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="">
              <div className="gallery-box rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/post19-copyright-650x572.jpg?v=1676888784"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold">Best Sellers</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                {" "}
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/4.png?v=1676907236"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold">Featured</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                {" "}
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/5.png?v=1676907497"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold"> New Arrivals</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                {" "}
                <img
                  className="rounded-lg "
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/2.png?v=1676907288"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold"> Trends</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="">
              <div className="gallery-box rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/post19-copyright-650x572.jpg?v=1676888784"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold">Best Sellers</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/4.png?v=1676907236"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold">Featured</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/5.png?v=1676907497"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold"> New Arrivals</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                <img
                  className="rounded-lg "
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/2.png?v=1676907288"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold"> Trends</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="">
              <div className="gallery-box rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/post19-copyright-650x572.jpg?v=1676888784"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold">Best Sellers</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                {" "}
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/4.png?v=1676907236"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold">Featured</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                {" "}
                <img
                  className="rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/5.png?v=1676907497"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold"> New Arrivals</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="gallery-box rounded-lg">
                {" "}
                <img
                  className="rounded-lg "
                  src="https://cdn.shopify.com/s/files/1/1152/4590/files/2.png?v=1676907288"
                  alt=""
                />
              </div>

              <div className="flex justify-between">
                <h3 className="text-2xl my-4 font-semibold"> Trends</h3>
                <div className="flex gap-4 items-center">
                  <div className="line"></div>
                  <p>8</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
