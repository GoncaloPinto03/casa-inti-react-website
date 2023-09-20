import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-[#263126] p-2 md:p-4'>
      <footer class="bg-[#E3E3E3] rounded-lg shadow dark:bg-gray-900 m-4">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <Link to='home' class="flex items-center mb-4  cursor-pointer">
                      <img src={logo} className='w-[30px]  my-4 mr-3 rounded-[10px]' alt="casainti Logo" />
                      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">CASA INTI</span>
                    </Link>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                    <div>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li>
                            <Link to='home' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                              <a class="mr-4 hover:underline md:mr-6">Home</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='about' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                              <a class="mr-4 hover:underline md:mr-6">About</a>
                            </Link>
                          </li>
                          <li>
                          <Link to='reviews' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                              <a class="mr-4 hover:underline md:mr-6">Reviews</a>
                            </Link>
                          </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li>
                            <Link to='location' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                              <a class="mr-4 hover:underline md:mr-6">Location</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='contact' smooth={true} duration={500} className='text-black font-bold cursor-pointer'>
                              <a class="mr-4 hover:underline md:mr-6">Contact</a>
                            </Link>
                          </li>
                          <li>
                            <a href='https://www.facebook.com/casaintiazores?locale=pt_PT'  className='text-black font-bold cursor-pointer'>
                              <a class="mr-4 hover:underline md:mr-6">Facebook</a>
                            </a>
                          </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <hr class="my-6 border-[#263126] sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-black-500 sm:text-center dark:text-gray-400 font-semibold">© 2023 <a class="hover:underline">CASA INTI</a>. All Rights Reserved.
                </span>
                <br></br>
                <a href='https://xn--gonalopinto-o9a.com/' class="text-sm text-black-500 sm:text-center dark:text-gray-400 font-semibold underline">By Gonçalo Pinto</a>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
