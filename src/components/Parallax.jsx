import React, { useState, useEffect } from "react";
import { hero1, hero2 } from "../assets";

const Parallax = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };

    const handleDeviceOrientation = (e) => {
      const tiltX = e.gamma;
      const tiltY = e.beta;
      setCursorPosition({ x: tiltX, y: tiltY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return (
    <div className="relative">
      <img
        className="absolute h-full"
        src={hero1}
        alt=""
        style={{
          transform: `translate(${cursorPosition.x * 0.0125}px, ${
            cursorPosition.y * 0.0125
          }px)`,
        }}
      />
      <img
        src={hero2}
        className="h-full"
        alt=""
        style={{
          transform: `translate(${cursorPosition.x * 0.025}px, ${
            cursorPosition.y * 0.025
          }px)`,
        }}
      />
    </div>
  );
};

export default Parallax;
