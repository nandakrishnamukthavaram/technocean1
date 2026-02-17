import React from "react";
import { Link } from "react-router-dom";
import { astro } from "../assets";

const PageNotFound = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col">
        <div className="h-[25dvh] flex justify-center items-center">
          <img className="h-full fly" src={astro} alt="" />
        </div>

        <div className="text-center">
          <h1 className="text-[10rem] text-secondary">404</h1>
          <p className="font-m font-bold mt-[-1.5rem]">
            It looks like you're lost...
          </p>

          <div className="mt-20">
            <Link to="/" className="bg-secondary rounded-full py-2 px-4 font-s">
              GO BACK HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
