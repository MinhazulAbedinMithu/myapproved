import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DotAnimation from './DotAnimation';

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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlide(index); // Update the active slide index
  };

  return (
    <div className="services px-4 md:px-32">
      <div className='flex justify-center mt-14'>
        <div className="text-center bg-gray-bg flex flex-col items-center justify-center">
          <h2 className='text-dark-text text-4xl font-bold px-20 py-4'>Explore Our Trending <br /> Categories</h2>
          <div className='w-36'>
            <DotAnimation />
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}>
        <div>
          <img src="image1.jpg" alt="Service 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Service 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Service 3" />
        </div>
        <div>
          <img src="image3.jpg" alt="Service 3" />
        </div>
        <div>
          <img src="image3.jpg" alt="Service 3" />
        </div>
      </Slider>
      <div className="custom-controls">
        <div className={`control-box ${activeSlide === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}></div>
        <div className={`control-box ${activeSlide === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}></div>
        <div className={`control-box ${activeSlide === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}></div>
        <div className={`control-box ${activeSlide === 3 ? 'active' : ''}`} onClick={() => goToSlide(3)}></div>
        <div className={`control-box ${activeSlide === 4 ? 'active' : ''}`} onClick={() => goToSlide(4)}></div>
      </div>
      <div className="bg-gray-bg">
        <h2 className='text-yellow font-bold text-xl'>Book With Peace of Mind</h2>
        <p className='text-sm'>Our approved tradespeople are covered by comprehensive liability insurance.</p>
        <div className='w-36'>
            <DotAnimation />
          </div>
      </div>
    </div>
  );
}

export default Services;