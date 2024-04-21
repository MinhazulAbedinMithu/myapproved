import React, { useState } from 'react';
import DotAnimation from './DotAnimation';
import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
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
    <footer className="flex bg-dark md:flex-row flex-col">
      <div className="flex flex-col items-center justify-center bg-sky-bg p-4 md:w-1/3 md:ml-24">
        <img src='https://i.postimg.cc/13JvwsDs/Myapproved-logo.png' alt='logo' />
        <div>
          <p className='text-sm text-center my-6 text-dark leading-3'>Join our community of tradespeople and clients today and stay informed with our newsletter. Our weekly newsletter is packed with valuable insights, tips, and updates on the tradespeople industry. From interviews with top tradespeople to insider information on the latest industry developments, our newsletter has it all.</p>
          <div className="flex items-start justify-center">
            <input className='px-2 py-2' type="email" placeholder="Your Email" />
            <button className='bg-dark text-white p-3 text-nowrap'>Sign Up</button>
          </div>
        </div>
      </div>
      <div className='w-full'>
      <div className='flex flex-col md:flex-row justify-between w-full px-32 my-12 text-white'>
        <div>
          <h2 className='text-3xl font-bold ms-4'>Get In Touch</h2>
          <div className="w-28 my-3">
            <DotAnimation value={1} />
          </div>
          <p className='flex gap-2 items-center text-sm my-2'><RiMessage2Line className='text-yellow' /> customercare@myapproved.co.uk</p>
          <p className='flex gap-2 items-center text-sm'><FiPhone className='text-yellow' /> +074 769 92213</p>
          <div className='flex gap-2 mt-6'>
            <p className='p-2 bg-black'><FaTwitter className="text-white text-lg" /></p>
            <p className='p-2 bg-black'><FaFacebookF className="text-white text-lg" /></p>
            <p className='p-2 bg-black'><FaLinkedinIn className="text-white text-lg" /></p>
            <p className='p-2 bg-black'><FaInstagram className="text-white text-lg" /></p>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h2 className='text-3xl font-bold ms-4'>Quick Links</h2>
          <div className="w-28 my-3">
            <DotAnimation value={1} />
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
      <div className="bg-dark-blue text-white py-8 text-center md:px-24 px-4">
        <p className="text-sm">&copy; <a href='#' className='text-white underline'>MyApproved</a>. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
