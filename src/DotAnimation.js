import React from "react";

const DotAnimation = ({ height = "h-1", width = "w-1" }) => {
  return (
    <div class={`relative w-full  bg-yellow-bg ${height}`}>
      <div
        id="moving-dot"
        class={`absolute top-0 left-0 ${width} ${height} bg-white animate-move-dot`}
      ></div>
    </div>
  );
};

export default DotAnimation;
