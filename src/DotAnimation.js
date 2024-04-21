import React from "react";

const DotAnimation = () => {
  return (
    <div class="relative w-full h-1.5 bg-yellow-bg">
      <div
        id="moving-dot"
        class="absolute top-0 left-0 w-1.5 h-1.5 bg-white animate-move-dot"
      ></div>
    </div>
  );
};

export default DotAnimation;
