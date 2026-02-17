import React, { useState } from "react";

const Toggle = ({ toggled, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={`toggle flex items-center relative h-4 w-6 z-[999] cursor-pointer ${
        toggled === "toggled" ? "toggled" : "not-toggled"
      }`}
    >
      <span className="absolute h-[0.2rem] w-full bg-secondary rounded-full"></span>
      <span className="absolute h-[0.2rem] w-full bg-secondary rounded-full"></span>
      <span className="absolute h-[0.2rem] w-full bg-secondary rounded-full"></span>
    </div>
  );
};

export default Toggle;
