import React from 'react';

const Main = () => {
  return (
    <main>
      <div className="banner mt-2">
        <img src="https://i.postimg.cc/Cx6TsbQX/Untitled-1750-700px-3750-1000px-7750-500px-7750-2000px-1903-478px-2-edited.png" alt="Banner" />
      </div>
      <div className="content">
        <h2>local heroes,<br /><span>expert standards</span></h2>
        <p>vetted and approved tradespeople ready to tackle<br /> you project today!!!</p>
        <div className="search-bar">
          <input type="text" placeholder="Trade (e.g. Electrician)" />
          <button>Search</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
