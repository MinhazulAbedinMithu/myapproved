import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header md:px-24 px-4 pb-2">
      <div className="logo">
          <img
            src="https://i.postimg.cc/13JvwsDs/Myapproved-logo.png"
            alt="My Approved Logo"
          />
      </div>
      <div className="header-search-bar pt-2">
        <input type="text" placeholder="&#128269; Search" />
      </div>
      <div className="flex flex-col items-center">
      <div className="buttons pt-2">
        <div className="dropdown">
          <button className="bordered">Menu 1 &#9660;</button>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="bordered">Menu 2 &#9660;</button>
          <div className="dropdown-content">
            <a href="#">Option A</a>
            <a href="#">Option B</a>
            <a href="#">Option C</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="yellow">Language &#9660;</button>
          <div className="dropdown-content">
            <a href="#">English</a>
            <a href="#">Spanish</a>
            <a href="#">French</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
          <button className="border-b-2 w-52"></button>
          <div className="dropdown-content">
            <a href="#">English</a>
            <a href="#">Spanish</a>
            <a href="#">French</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
