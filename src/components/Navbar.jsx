import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black bg-[#E3E3E3]'>
      <img className='w-[30px] mx-auto my-4 mr-3 rounded-[10px]' src={logo} alt='/'/>
        <h1 className='w-full text-3xl font-bold text-[#417154] cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>
            CASA INTI
          </Link>
        </h1>
        <ul className='hidden md:flex font-bold text-xl'>
          <li className='p-4 cursor-pointer'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to='about' smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to='reviews' smooth={true} offset={50} duration={500}>
              Reviews
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to='contact' smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} className='fixed bottom-0 left-0 m-5 z-50'/>}
        </div>
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#6D9775] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='flex items-center ml-4 my-4'>
          <img className='w-[30px] rounded-[10px]' src={logo} alt='/'/>
          <h1 className=' text-3xl font-bold text-[#E3E3E3] m-4'>CASA INTI</h1>
        </div>
        <ul className='uppercase p-4 font-bold'>
          <li onClick={handleNav} className='p-4 border-b border-gray-600'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li onClick={handleNav} className='p-4 border-b border-gray-600'>
            <Link to='about' smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li onClick={handleNav} className='p-4 border-b border-gray-600'>
            <Link to='reviews' smooth={true} offset={50} duration={500}>
              Reviews
            </Link>
          </li>
          <li onClick={handleNav} className='p-4'>
            <Link to='contact' smooth={true} offset={50} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

