import React from "react";

const DotAnimation = ({value}) => {
  return (
    <div class={`relative w-full h-${value} bg-yellow-bg`}>
      <div
        id="moving-dot"
        class={`absolute top-0 left-0 w-${value} h-${value} bg-white animate-move-dot`}
      ></div>
    </div>
  );
};

export default DotAnimation;
