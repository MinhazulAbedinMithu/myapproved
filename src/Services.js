import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DotAnimation from "./DotAnimation";

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0); // State to manage the active slide index
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlide(index); // Update the active slide index
  };

  return (
    <div className="services px-4 md:px-32">
      <div className="flex justify-center mt-14">
        <div className="text-center bg-gray-bg flex flex-col items-center justify-center">
          <h2 className="text-dark text-4xl font-bold px-20 py-4">
            Explore Our Trending <br /> Categories
          </h2>
          <div className="w-36">
            <DotAnimation />
          </div>
        </div>
      </div>
      <Slider
        className="my-10 w-full"
        ref={sliderRef}
        {...settings}
        beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}
      >
        <div className={`slide ${activeSlide === 0 ? "active-slide" : ""}`}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            {" "}
            <path d="M8.029 60.527c0 .878.342 1.705.963 2.326s1.446.964 2.326.964c.906 0 1.728-.37 2.323-.965s.965-1.417.965-2.323l.001-11.861-6.577.001-.001 11.858zM15.841 43.855h-1.235l.003-16.261a2.016 2.016 0 0 0 1.435-.73 2.02 2.02 0 0 0 .43-1.668l-1.201-6.333a2.024 2.024 0 0 0-1.988-1.646h-3.94a2.025 2.025 0 0 0-1.988 1.647l-1.203 6.333a2.013 2.013 0 0 0 .43 1.668c.362.438.886.7 1.449.73l-.003 16.26H6.651a1.21 1.21 0 0 0 .002 2.42l9.19-.003c.334 0 .636-.136.855-.355a1.205 1.205 0 0 0-.857-2.062zM23.132 15.139l.009 45.052c0 .968.378 1.878 1.064 2.563a3.598 3.598 0 0 0 2.559 1.062h.004a3.615 3.615 0 0 0 3.612-3.613l-.009-45.064h-7.238zM45.262 8.591C40.9-.305 32.535.001 32.535.001L23.41 0a3.547 3.547 0 0 0-3.534 3.238l-3.292-.001a1.646 1.646 0 0 0-1.618-1.38 1.65 1.65 0 0 0-1.645 1.645v5.85c0 .905.74 1.645 1.645 1.645.877 0 1.592-.696 1.637-1.562l3.274.001a3.548 3.548 0 0 0 3.534 3.236h6.433c3.018 0 2.692-2.692 2.692-2.692 0-2.504 2.577-4.165 4.867-3.15a14.966 14.966 0 0 1 5.064 3.665c.572.64 1.537.739 2.234.238l.037-.027a1.69 1.69 0 0 0 .525-2.115zM58.144 47.547l-2.097-1.853.879-2.656a1.22 1.22 0 0 0-.352-1.302l-2.095-1.853.879-2.656a1.224 1.224 0 0 0-.352-1.302l-2.097-1.853.879-2.656a1.223 1.223 0 0 0-.352-1.302l-2.095-1.852.878-2.656a1.225 1.225 0 0 0-.352-1.302l-2.095-1.852.879-2.655a1.222 1.222 0 0 0-.351-1.303l-2.979-2.63c-.352-.312-.239-.229-4.918-1.004a3.71 3.71 0 0 0-4.312 3.793l1.037 28.494 18.945 2.963.417-1.261a1.218 1.218 0 0 0-.348-1.302zM39.223 49.641l.335 9.188a3.711 3.711 0 0 0 3.131 3.528l10.14 1.585c2.917.46 5.535-1.86 5.426-4.814l-.238-6.547-18.794-2.939zm13.938 7.812c-.257.39-.726.616-1.217.536l-6.52-1.041a1.224 1.224 0 1 1 .386-2.418l6.52 1.042a1.225 1.225 0 0 1 .832 1.88z"></path>{" "}
          </svg>
          <p className="text-2xl text-yellow">Handy-Person</p>
        </div>
        <div className={`slide ${activeSlide === 1 ? "active-slide" : ""}`}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            {" "}
            <path d="M63.788 16.937C63.36 7.992 54.932.178 45.987.265a18.859 18.859 0 0 0-.431-.005c-10.017 0-18.138 8.12-18.138 18.138 0 1.515.186 2.986.535 4.392l-.026-.125c.237 1.009.515 1.869.854 2.699l-.043-.12L2.399 47.936C.314 49.759-.64 52.885 1.096 54.621c0 0 2.57 2.568 6.858-1.651l6.441 6.441c.329.329.782.532 1.284.532s.955-.203 1.284-.532l.173-.172a1.815 1.815 0 0 0 0-2.57l-6.239-6.239 1.859-1.595 4.992 4.992c.295.295.702.477 1.152.477s.857-.182 1.152-.477l.155-.154c.294-.295.476-.702.476-1.152s-.182-.857-.476-1.152l-4.804-4.804 2.326-1.998 6.102 6.101a1.74 1.74 0 1 0 2.462-2.46l-5.914-5.914 12.744-10.936c3.113 2.603 7.328 4.018 12.257 4.161 8.943.257 18.93-6.167 18.409-18.584zm-14.116 1.664a4.849 4.849 0 1 1 4.849-4.849v.005a4.849 4.849 0 0 1-4.849 4.849z"></path>{" "}
          </svg>
          <p className="text-2xl text-yellow">Locksmith</p>
        </div>
        <div className={`slide ${activeSlide === 2 ? "active-slide" : ""}`}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            {" "}
            <path d="M63.542 20.26c0-.874-.708-1.582-1.582-1.582H10.846a.058.058 0 0 1-.058-.058v-5.144c0-.032.026-.058.058-.058h2.424c.032 0 .058.026.058.058v1.679c0 .874 1.28 1.452 1.892 1.452 1.219 0 2.432-.608 2.491-1.451v-4.48a1.64 1.64 0 0 0-1.64-1.64H8.04c-.905 0-1.638.734-1.638 1.638V18.62a.058.058 0 0 1-.058.058H1.639c-.904 0-1.637.733-1.637 1.637.008 9.558 2.13 20.879 13.142 22.044.029 0 .053.024.053.054 0 .019-.01.036-.026.046a2.81 2.81 0 0 0-1.181 2.016l-.001.012c-.083 1.27.268 1.995 1.618 2.084s3.252-1.482 3.334-2.752a1.76 1.76 0 0 0-.019-.395l.001.01c.902.285 4.387 1.175 7.474 1.219l14.568-.044c3.652 0 8.541-1.448 8.535-1.408-.067.465-.035 1.014.669 2.122.68 1.071 1.897 1.743 3.158 1.609s1.615-.952 1.585-2.342a3.352 3.352 0 0 0-1.568-2.7l-.014-.008a.051.051 0 0 1 .006-.095c2.294-.745 6.446-2.618 9.5-6.999 4.494-6.454 2.967-13.427 2.707-14.528z"></path>{" "}
          </svg>
          <p className="text-2xl text-yellow">Bathrooms</p>
        </div>
        <div className={`slide ${activeSlide === 3 ? "active-slide" : ""}`}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            {" "}
            <path d="M17.148 13.367V3.763a3.783 3.783 0 0 0-3.771-3.776H3.776A3.79 3.79 0 0 0 0 3.763v9.604a3.793 3.793 0 0 0 3.776 3.776h9.601a3.784 3.784 0 0 0 3.771-3.776zM38.478 13.367V3.763a3.783 3.783 0 0 0-3.771-3.776h-9.599a3.79 3.79 0 0 0-3.776 3.776v9.604a3.793 3.793 0 0 0 3.776 3.776h9.599a3.784 3.784 0 0 0 3.771-3.776zM59.809 13.367V3.763a3.78 3.78 0 0 0-3.768-3.776h-9.603a3.79 3.79 0 0 0-3.773 3.776v9.604c0 2.07 1.702 3.776 3.773 3.776h9.601c2.08 0 3.77-1.704 3.77-3.776zM17.148 34.71v-9.601c0-2.076-1.692-3.779-3.771-3.779H3.776A3.79 3.79 0 0 0 0 25.109v9.601a3.793 3.793 0 0 0 3.776 3.776h9.601c2.079 0 3.771-1.709 3.771-3.776zM38.478 34.71v-9.601c0-2.076-1.692-3.779-3.771-3.779h-9.599a3.79 3.79 0 0 0-3.776 3.779v9.601a3.793 3.793 0 0 0 3.776 3.776h9.599c2.079 0 3.771-1.709 3.771-3.776zM59.809 34.71v-9.601c0-2.076-1.69-3.779-3.768-3.779h-9.603a3.79 3.79 0 0 0-3.773 3.779v9.601c0 2.07 1.702 3.776 3.773 3.776h9.601c2.08 0 3.77-1.709 3.77-3.776zM17.148 56.05v-9.601a3.783 3.783 0 0 0-3.771-3.776H3.776A3.79 3.79 0 0 0 0 46.449v9.601c0 2.071 1.702 3.779 3.776 3.779h9.601c2.079 0 3.771-1.709 3.771-3.779zM38.478 56.05v-9.601a3.783 3.783 0 0 0-3.771-3.776h-9.599a3.79 3.79 0 0 0-3.776 3.776v9.601c0 2.071 1.702 3.779 3.776 3.779h9.599c2.079 0 3.771-1.709 3.771-3.779zM64 60.234v-9.599c0-2.075-1.692-3.779-3.768-3.779h-9.601a3.792 3.792 0 0 0-3.779 3.779v9.599a3.797 3.797 0 0 0 3.779 3.779h9.601c2.076 0 3.768-1.708 3.768-3.779z"></path>{" "}
          </svg>
          <p className="text-2xl text-yellow">Tiler</p>
        </div>
        <div className={`slide ${activeSlide === 4 ? "active-slide" : ""}`}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            {" "}
            <path d="M6.392 58.269a9.427 9.427 0 0 1-2.472-.329v6.059h4.943V57.94a9.422 9.422 0 0 1-2.472.329zM48.611 58.269a9.427 9.427 0 0 1-2.472-.329v6.059h4.943V57.94a9.422 9.422 0 0 1-2.472.329zM20.425 0a4.55 4.55 0 0 0-4.544 4.544v46.025c0 2.506 2.039 4.544 4.544 4.544s4.544-2.039 4.544-4.544V4.544A4.55 4.55 0 0 0 20.425 0zM34.578 0a4.55 4.55 0 0 0-4.544 4.544v46.025c0 2.506 2.039 4.544 4.544 4.544s4.544-2.039 4.544-4.544V4.544A4.55 4.55 0 0 0 34.578 0zM1.847 19.465v31.104c0 2.506 2.039 4.544 4.544 4.544s4.544-2.039 4.544-4.544V4.544C10.936 2.039 8.898 0 6.392 0S1.848 2.039 1.848 4.544v6.826l-.001 8.095zM58.099 6.135a.89.89 0 0 0-.89.89v4.346h-4.054V4.642c0-2.473-1.935-4.566-4.407-4.639a4.548 4.548 0 0 0-4.682 4.543v45.928c0 2.473 1.935 4.566 4.407 4.639a4.55 4.55 0 0 0 4.682-4.543V19.466h4.054v4.346c0 .491.398.89.89.89h2.671c.763 0 1.382-.618 1.382-1.382V7.518c0-.763-.618-1.382-1.382-1.382h-2.671z"></path>{" "}
          </svg>
          <p className="text-2xl text-yellow">Central Heating</p>
        </div>
      </Slider>
      <div className="custom-controls">
        <div
          className={`control-box ${activeSlide === 0 ? "active" : ""}`}
          onClick={() => goToSlide(0)}
        ></div>
        <div
          className={`control-box ${activeSlide === 1 ? "active" : ""}`}
          onClick={() => goToSlide(1)}
        ></div>
        <div
          className={`control-box ${activeSlide === 2 ? "active" : ""}`}
          onClick={() => goToSlide(2)}
        ></div>
        <div
          className={`control-box ${activeSlide === 3 ? "active" : ""}`}
          onClick={() => goToSlide(3)}
        ></div>
        <div
          className={`control-box ${activeSlide === 4 ? "active" : ""}`}
          onClick={() => goToSlide(4)}
        ></div>
      </div>
      <div className="bg-gray-bg mb-10 mt-20">
        <div className="flex gap-4 p-3">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 225.000000 225.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            {" "}
            <g
              transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
              fill="#008000"
              stroke="none"
            >
              {" "}
              <path
                d="M819 2211 c-13 -10 -53 -59 -89 -109 l-65 -90 -59 -6 c-32 -3 -92 -6
                     -131 -6 -107 0 -111 -6 -137 -166 l-22 -130 -108 -63 c-60 -35 -116 -74 -126
                     -88 -16 -25 -15 -31 27 -152 l43 -127 -71 -114 c-39 -62 -71 -123 -71 -134 0
                     -14 35 -54 100 -116 l100 -96 -10 -99 c-13 -134 -12 -168 3 -188 7 -10 65 -32
                     139 -53 l127 -36 50 -117 c29 -69 59 -123 73 -134 24 -18 28 -17 156 9 l131
                     27 83 -70 c112 -94 132 -106 160 -97 12 4 66 43 120 87 l98 79 130 -27 c115
                     -24 134 -25 152 -13 12 8 43 65 73 134 l51 119 124 37 c142 43 164 59 156 117
                     -3 20 -8 79 -12 131 l-6 95 96 93 c76 74 96 99 96 121 0 17 -26 69 -69 136
                     l-68 109 38 115 c22 63 39 127 39 141 0 34 -13 45 -137 114 -111 62 -105 54
                     -123 181 -16 114 -28 153 -50 165 -10 5 -54 10 -97 10 -43 0 -101 3 -129 6
                     l-52 6 -77 104 c-50 68 -86 106 -102 110 -18 5 -58 -9 -145 -50 l-121 -57
                     -116 56 c-64 30 -124 55 -132 55 -9 0 -27 -8 -40 -19z m734 -692 c63 -47 69
                     -53 65 -82 -5 -37 -496 -780 -527 -797 -11 -5 -34 -10 -53 -10 -29 0 -54 22
                     -240 208 -155 154 -208 214 -208 231 0 30 127 161 155 161 10 0 76 -57 146
                     -127 71 -70 130 -125 132 -122 3 2 86 128 187 279 100 151 189 283 198 293 27
                     31 71 20 145 -34z"
              ></path>{" "}
            </g>{" "}
          </svg>
          <div>
            <h2 className="text-yellow font-bold text-xl">
              Book With Peace of Mind
            </h2>
            <p className="text-sm">
              Our approved tradespeople are covered by comprehensive liability
              insurance.
            </p>
          </div>
        </div>
        <div className="w-36">
          <DotAnimation />
        </div>
      </div>
    </div>
  );
};

export default Services;
