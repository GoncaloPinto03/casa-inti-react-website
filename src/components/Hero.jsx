import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import background from '../assets/background1.jpg';

const Hero = () => {
  return (
    <div name="home" className='text-black bg-[#E3E3E3] relative z-auto'
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='backdrop-blur-sm'>
      <div className='max-w-[800px] min-h-[700px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='rounded-2xl   '>
          <div className='backdrop-blur-sm bg-black/30 rounded-xl inline-block'>
          <p className='text-[#6D9775] font-bold p-3 '>FURNAS, AZORES</p>
          </div>
          
          <h1 className='md-text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#e3e3e3]'>Enjoy your vacations</h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#e3e3e3]'>Best place to </p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#e3e3e3]' strings={['Relax', 'Enjoy', 'Stay']} typeSpeed={120} backSpeed={140} loop/>
          </div>
          <div className=''>
            <Link to="contact" smooth={true} offset={0} duration={500}>
              <button className='bg-[#6D9775] hover:bg-[#3c6447] hover:shadow-lg w-[300px] text-xl rounded-md my-6 mx-auto py-3 text-white font-semibold'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
