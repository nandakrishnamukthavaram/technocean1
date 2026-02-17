import React, { useEffect, useRef } from "react";
import { hero1, hero2 } from "../assets";

const SmallParalax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOrientation = (event) => {
      if (containerRef.current) {
        const { beta, gamma } = event;
        const translateX = gamma * 0.2;
        const translateY = beta * 0.15;

        containerRef.current.querySelector(
          ".hero1"
        ).style.transform = `translate(${translateX}px, ${translateY}px)`;
        containerRef.current.querySelector(
          ".hero2"
        ).style.transform = `translate(${translateX * 2}px, ${
          translateY * 2
        }px)`;
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <img src={hero1} alt="" className="absolute h-full max-h-[50dvh] hero1" />
      <img src={hero2} alt="" className="h-full hero2 max-h-[50dvh]" />
    </div>
  );
};

export default SmallParalax;
