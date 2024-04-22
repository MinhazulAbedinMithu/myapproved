import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon } from "react-icons/fa6";
import { FaSearch, FaBars, FaCaretDown } from "react-icons/fa";

const Header = () => {
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="header flex items-end md:items-start justify-between md:px-20 px-4 pb-2 bg-sky-bg">
        <div className="logo justify-center w-full md:w-auto">
          <img
            src="https://i.postimg.cc/13JvwsDs/Myapproved-logo.png"
            alt="My Approved Logo"
          />
        </div>
        <button
          className="block md:hidden text-2xl border border-yellow text-yellow px-2 py-1 rounded-md"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <FaBars />
        </button>
        <div className="hidden md:flex items-start gap-4 justify-between w-full">
          <div className="flex items-center justify-start gap-2 mt-2 rounded-lg bg-white py-2 px-2 md:w-1/2 md:ms-20">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="buttons pt-2">
              <div className="dropdown">
                <button className="flex items-center text-sm gap-1 font-bold">Trade <FaCaretDown className="text-xs text-gray-600" /></button>
                <div className="dropdown-content">
                  <a className="text-sm" href="#">
                    Log In
                  </a>
                  <a className="text-sm" href="#">
                    Create A New Account
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button className="flex items-center text-sm gap-1 font-bold">Client <FaCaretDown className="text-xs text-gray-600" /></button>
                <div className="dropdown-content">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                  <hr />
                  <a href="#">
                    Night Mode <FaMoon />
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button className="yellow flex items-center text-sm gap-1 font-bold">Language  <FaCaretDown className="text-xs text-gray-600" /></button>
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
        </div>
      </header>
      {toggleMenu && (
        <div className="bg-sky-bg flex flex-col items-start gap-4 justify-end px-4">
          <div className="flex items-center justify-start gap-2 mt-2 rounded-lg w-full bg-white py-2 px-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="buttons pt-2">
              <div className="dropdown">
                <button className="bordered">Trade &#9660;</button>
                <div className="dropdown-content">
                  <a className="text-sm" href="#">
                    Log In
                  </a>
                  <a className="text-sm" href="#">
                    Create A New Account
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button className="bordered">Client &#9660;</button>
                <div className="dropdown-content">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                  <hr />
                  <a href="#">
                    Night Mode <FaMoon />
                  </a>
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
        </div>
      )}
    </>
  );
};

export default Header;
