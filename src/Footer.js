import React, { useState } from 'react';
import DotAnimation from './DotAnimation';
import { FaArrowRightLong } from 'react-icons/fa6';
import { RiMessage2Line } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your sign-up logic
    console.log('Email submitted:', email);
    // Reset the email input after submission
    setEmail('');
  };

  return (
    <footer className="md:px-24 px-4 flex bg-dark">
    <div className="flex flex-col items-center justify-center bg-sky-bg w-1/2 p-4">
    <img src='https://i.postimg.cc/13JvwsDs/Myapproved-logo.png' alt='logo' />
      <p className='text-sm text-center my-6'>Join our community of tradespeople and clients today and stay informed with our newsletter. Our weekly newsletter is packed with valuable insights, tips, and updates on the tradespeople industry. From interviews with top tradespeople to insider information on the latest industry developments, our newsletter has it all.</p>
      <div className="flex items-start">
        <input className='px-2 py-2' type="email" placeholder="Your Email" />
        <button className='bg-dark text-white p-3'>Sign Up</button>
      </div>
    </div>
    <div className='flex justify-between w-full px-32 mt-12 text-white'>
    <div>
      <h2 className='text-3xl font-bold ms-4'>Get In Touch</h2>
      <div className="w-28 my-3">
            <DotAnimation />
          </div>
      <p className='flex gap-2 items-center text-sm my-2'><RiMessage2Line className='text-yellow' /> customercare@myapproved.co.uk</p>
      <p className='flex gap-2 items-center text-sm'><FiPhone className='text-yellow' /> +074 769 92213</p>
    </div>
    <div>
      <h2 className='text-3xl font-bold ms-4'>Quick Links</h2>
      <div className="w-28 my-3">
            <DotAnimation />
          </div>
      <ul>
        <li><a href="#" className='text-white flex items-center gap-2 text-sm'><FaArrowRightLong className='text-yellow' /> Home</a></li>
        <li><a href="#" className='text-white flex items-center gap-2 text-sm'><FaArrowRightLong className='text-yellow' /> About</a></li>
        <li><a href="#" className='text-white flex items-center gap-2 text-sm'><FaArrowRightLong className='text-yellow' /> Terms</a></li>
        <li><a href="#" className='text-white flex items-center gap-2 text-sm'><FaArrowRightLong className='text-yellow' /> Privacy</a></li>
        <li><a href="#" className='text-white flex items-center gap-2 text-sm'><FaArrowRightLong className='text-yellow' /> Directory</a></li>
        <li><a href="#" className='text-white flex items-center gap-2 text-sm'><FaArrowRightLong className='text-yellow' /> Contact Us</a></li>
      </ul>
    </div>
    </div>
  </footer>
  );
}

export default Footer;

