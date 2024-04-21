import React from "react";

const Main = () => {
  return (
    <main className="banner-full md:px-4 md:py-10">
      {/* <div className="banner mt-2">
        <img src="https://i.postimg.cc/Cx6TsbQX/Untitled-1750-700px-3750-1000px-7750-500px-7750-2000px-1903-478px-2-edited.png" alt="Banner" />
      </div> */}
      <div className="content">
        <div className=" px-4 md:px-0 py-6">
          <h2 className="text-white text-lg md:text-5xl">
            local heroes,
            <br />
            <span>expert standards</span>
          </h2>
          <p className="text-white text-sm md:text-2xl">
            vetted and approved tradespeople ready to tackle
            <br /> you project today!!!
          </p>
        </div>
        <div className="w-full bg-2nd-dark-blue md:bg-transparent px-4 py-4">
          <h4 className="block md:hidden text-center text-white text-xl font-bold py-2">
            Find Your Approved Tradesperson
          </h4>
          <div className="search-bar">
            <input type="text" placeholder="Trade (e.g. Electrician)" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
