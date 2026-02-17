import React from "react";
import { Twitter, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { logo2 } from "../../assets";

const Footer = () => {
  return (
    <div className="px-3 md:px-10 lg:px-20">
      <div className="py-5 lg:py-10 bg-[#2c2c2c] flex justify-between space-x-5 items-center px-4 md:px-10 lg:px-20 rounded-lg">
        <div>
          <div className="w-[80%] md:w-[250px] lg:w-[300px]">
            <img src={logo2} className="w-full" alt="Logo" />
          </div>
          <div className="mt-3 font-m">
            <p className="m-0 font-bold text-[0.6rem] md:text-xs lg:text-sm md:w-[70%] lg:w-[50%]">
              <span className="text-secondary">TechnOcean</span> is a three-day{" "}
              <span className="text-secondary">tech fest</span> hosted by the
              School of Computer Science and Engineering at Lovely Professional
              University, with a theme of "
              <span className="text-secondary">Learn. Build. Present.</span>"
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 lg:space-x-5">
          <a href="https://twitter.com/scse_lpu" target="_blank">
            <Twitter size={20} color="#FF7800" />
          </a>
          <a href="https://www.instagram.com/scse_lpu/" target="_blank">
            <Instagram size={20} color="#FF7800" />
          </a>
          <a href="https://www.facebook.com/scse.lpu" target="_blank">
            <Facebook size={20} color="#FF7800" />
          </a>
          <a href="https://www.youtube.com/@scselpu" target="_blank">
            <Youtube size={20} color="#FF7800" />
          </a>
          <a href="https://www.youtube.com/@scselpu" target="_blank">
            <Linkedin size={20} color="#FF7800" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
