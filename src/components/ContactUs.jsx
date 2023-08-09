import React from "react";
import "./ContactUs.css";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="container mx-auto flex gap-5">
      <div className="w-1/2">
        <h1 className="text-[30px] font-semibold">Get in touch</h1>
        <p className="text-[#5a5a5a] mb-10">
          We'd love to hear from you, lets get in touch! lorem ipsum is not
          simply random text. It has roots in a piece of classical.
        </p>
        <div className="flex gap-8 items-center my-6">
          <div className="text-[30px] contact-icon flex items-center justify-center">
            <i className="sli sli-location-pin"></i>
          </div>
          <div>
            <h2 className="text-[20px] m-0">Headquarter </h2>
            <p className="text-[#5a5a5a]">
              Address goes here, street, Crossroad 123.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center my-6">
          <div className="text-[30px] contact-icon flex items-center justify-center">
            <i className="sli sli-screen-smartphone"></i>
          </div>
          <div>
            <h2 className="text-[20px] m-0">Phone Number </h2>
            <p className="text-[#5a5a5a]">
              +1 23 456 789 000 / +2 23 456 789 000
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center my-6">
          <div className="text-[30px] contact-icon flex items-center justify-center">
            <i className="sli sli-envelope"></i>
          </div>
          <div>
            <h2 className="text-[20px] m-0">Email Us </h2>
            <p className="text-[#5a5a5a]">
              info@example.com / info@example.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className=" ">
          <div className="hero-content ">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <form onSubmit={() => handleSubmit} className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    type="textarea"
                    placeholder="Your Message"
                    className="input input-bordered min-h-[150px] py-4"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6 contact-from">
                  <button type="submit" className=" button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
