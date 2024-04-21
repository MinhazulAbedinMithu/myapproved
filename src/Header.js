import React from "react";
import { useTranslation } from "react-i18next";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header flex items-start justify-between md:px-24 px-4 pb-2">
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
          <button className="bordered">Trade &#9660;</button>
          <div className="dropdown-content">
            <a className="text-sm" href="#">Log In</a>
            <a className="text-sm" href="#">Create A New Account</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="bordered">Client &#9660;</button>
          <div className="dropdown-content">
            <a href="#">Login</a>
            <a href="#">Register</a>
            <hr />
            <a href="#">Night Mode <FaMoon /></a>
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
