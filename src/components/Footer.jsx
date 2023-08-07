import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-[#E3E3E3] mx-auto py-8 px-4 text-gray-300 grid md:grid-cols-3 '>
      <div className='flex items-center md:ml-4'>
        <img className='w-[30px] mr-2 rounded-[10px]' src={logo} alt='/' />
        <h1 className='text-4xl font-bold text-[#6D9775]'>CASA INTI</h1>      
      </div>
      <div className='mx-auto items-center justify-center '>  
        
          <Link to='home' smooth={true} duration={500} className='text-black font-bold px-6 cursor-pointer'>
            Home
          </Link>
          <Link to='about' smooth={true} duration={500} className='text-black font-bold px-6 cursor-pointer'>
            About
          </Link>
          <Link to='reviews' smooth={true} duration={500} className='text-black font-bold px-6 cursor-pointer'>
            Reviews
          </Link>
          <Link to='contact' smooth={true} duration={500} className='text-black font-bold px-6 cursor-pointer'>
            Contact
          </Link>
        
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <h2 className='text-4xl font-bold text-black mb-4'>Contact Us</h2>
          <p className='mt-7 text-black font-bold'>Patrícia Estrela</p>
        </div> 
        <div className=' md:w-[75%]'>
          <p className='py-1 text-black'>+351 912345678</p>
          <p className='py-1 text-black'>casainti@gmail.com</p>
          <AiOutlineFacebook size={30} className='inline-block text-[#104730] mt-2' />
        </div>  
      </div>
    </div>
  );
};

export default Footer;
