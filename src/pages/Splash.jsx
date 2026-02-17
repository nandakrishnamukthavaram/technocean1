import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { ring } from "ldrs";

const Splash = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ring.register();
    const scrollTimeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 4000);

    document.body.style.overflow = "hidden";

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div
      className={`fixed w-screen bg-primary z-[9999999] top-0 ${
        !loading && "splash"
      }`}
    >
      <div
        className={`flex justify-center items-center h-[100dvh] relative px-3`}
      >
        <div className="flex justify-center">
          <div className="lg:w-[40%] md:w-[70%]">
            <Logo />
          </div>
        </div>

        <div className="absolute hidden lg:block bottom-5">
          <l-ring
            size="30"
            stroke="2"
            bg-opacity="0"
            speed="2"
            color="#FF7800"
          ></l-ring>
        </div>
        <div className="absolute lg:hidden bottom-5">
          <l-ring
            size="25"
            stroke="2"
            bg-opacity="0"
            speed="2"
            color="#FF7800"
          ></l-ring>
        </div>
      </div>
    </div>
  );
};

export default Splash;
