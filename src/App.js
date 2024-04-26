import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

import "./styles.css"; // Importing styles.css
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <div className="App">
      {/* <div id="google_translate_element"></div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
