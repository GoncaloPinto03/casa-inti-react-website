import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-[#263126] p-2 md:p-4'>
      <footer class="bg-[#E3E3E3] rounded-lg shadow dark:bg-gray-900 m-4">
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div class="sm:flex sm:items-center sm:justify-between">
                  <Link to='home' class="flex items-center mb-4  cursor-pointer">
                      <img src={logo} className='w-[30px] mx-auto my-4 mr-3 rounded-[10px]' alt="casainti Logo" />
                      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">CASA INTI</span>
                  </Link>
                  <ul class="flex flex-wrap  items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <Link to='home' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                        <a class="mr-4 hover:underline md:mr-6">Home</a>
                      </Link>
                      <Link to='about' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                        <a class="mr-4 hover:underline md:mr-6">About</a>
                      </Link>
                      <Link to='reviews' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                        <a class="mr-4 hover:underline md:mr-6">Reviews</a>
                      </Link>
                      <Link to='location' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                        <a class="mr-4 hover:underline md:mr-6">Location</a>
                      </Link>
                      <Link to='contact' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                        <a class="mr-4 hover:underline md:mr-6">Contact</a>
                      </Link>
                      <Link href='https://www.facebook.com/casaintiazores?locale=pt_PT' className='cursor-pointer items-center justify-center'>
                        <AiOutlineFacebook size={30} className='inline-block text-[#104730]' />
                      </Link>
                  </ul>
              </div>
              <hr class="my-6 border-[#6D9775] sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span class="block text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a>CASA INTI™</a>. All Rights Reserved.</span>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
