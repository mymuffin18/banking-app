import React from "react";
import Toggle from "./Toggle";

function Circles(props) {
  return (
    <div className="relative">
      <div className="absolute h-36 w-36 bg-pink-500 rounded-full z-0 inset-y-1/2 inset-x-1/2 pink-circle"></div>
      <div className="absolute h-36 w-36 bg-purple-500 rounded-full z-0 inset-y-1/2 inset-x-1/4 purple-circle"></div>
      <div className="absolute right-5 top-3">
        <Toggle />
      </div>
      {props.children}
    </div>
  );
}

export default Circles;
