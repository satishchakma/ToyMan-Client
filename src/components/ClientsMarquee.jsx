import React from "react";

const ClientsMarquee = () => {
  return (
    <div className="my-16 flex gap-4">
      <marquee>
        <div className="flex gap-24">
          <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo5_compact.png?v=1676127524" />
          <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo1_compact.png?v=1676127525" />
          <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo2_compact.png?v=1676127525" />
          <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo5_compact.png?v=1676127524" />
          <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo1_compact.png?v=1676127525" />
          <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo2_compact.png?v=1676127525" />
        </div>
      </marquee>
    </div>
  );
};

export default ClientsMarquee;
