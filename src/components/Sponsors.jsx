import React from "react";
import { es, lpuLogo, microsoft, swiggy } from "../assets";

const Sponsors = () => {
  return (
    <div className="mt-16">
      <h1 className="ue-head text-3xl md:text-center lg:text-center">
        Our <span className="text-secondary">Sponsors</span>
      </h1>
      <div className="rounded-3xl mt-5 lg:mt-10 flex items-center flex-col">
        <div className="flex items-center space-x-2">
          <div className="bg-[#313131] max-w-[200px] p-3 rounded-xl">
            <img src={swiggy} alt="Swiggy" />
          </div>
          <div className="bg-[#313131] p-3 lg:px-10 rounded-xl ">
            <img src={lpuLogo} alt="LPU" />
          </div>
          <div className="bg-[#313131] max-w-[200px] p-3 rounded-xl">
            <img src={swiggy} alt="Swiggy" />
          </div>
        </div>
        <div className="flex space-x-2 mt-2">
          <div className="bg-[#313131] p-3 rounded-xl flex items-center justify-center ">
            <img src={microsoft} alt="Microsoft" />
          </div>
          <div className="bg-[#313131] p-3 rounded-xl">
            <img src={es} alt="Eurus" />
          </div>
        </div>
      </div>
      <p className="text-center font-m text-[#B3B3B3] mt-5 md:mt-10 lg:mt-14 text-[0.5rem] md:text-xs lg:text-xs md:px-20 lg:px-40">
        TechnOcean is proud to partner with a diverse range of innovative
        companies and organizations that share our passion for technology and
        community-building. Our sponsors play a crucial role in supporting our
        mission to create an inclusive and engaging tech festival, and we are
        grateful for their continued support. With their help, we are able to
        provide top-notch resources, opportunities, and experiences for our
        attendees. We invite you to learn more about our sponsors and how they
        are making a difference in the tech industry.
      </p>
    </div>
  );
};

export default Sponsors;
