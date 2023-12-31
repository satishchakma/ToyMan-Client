import React from "react";

import Faq from "react-faq-component";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const FaqSection = () => {
  const data = {
    rows: [
      {
        title: "What is the age range of the toys available in store?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div
      data-aos="flip-left"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="my-12 container mx-auto text-black"
    >
      <h1 className="text-5xl text-center my-8">Frequently Asked Questions</h1>
      <p className="text-center my-5">Find your answer from here</p>
      <div className="lg:flex gap-5 items-center">
        <div className="lg:w-1/2 w-full p-4">
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/1152/4590/files/toys_party.png?v=1676127944"
              }
            ></img>
          </div>
        </div>
        <div className="lg:w-1/2 w-full p-4">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
