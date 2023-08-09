import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import map from '../assets/map.png'

const Location = () => {
  


  return (
    <div className='bg-[#e3e3e3] p-2 justify-center flex items-center'>
    <div name="location" className=' bg-[#d7e0c8] p-2 md:p-4 rounded-3xl m-4 max-w-[1240px]'>
        <div className='max-w-[1240px] mx-auto'>
            
            <div className='flex flex-col justify-center px-4 py-4'>
                <p className='text-[#6D9775] font-bold'>LOCATION</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>CASA INTI</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius neque in sodales auctor. Vestibulum tincidunt tempor metus, a cursus augue aliquam vitae. Nullam ipsum massa, rutrum ac felis vel, pharetra malesuada ex. Duis convallis congue turpis, ut porta quam congue in. Phasellus nec magna tortor. Vivamus id est euismod, malesuada nibh a, sagittis eros. Quisque erat quam, tristique id sapien vehicula, aliquam varius nunc. Etiam eleifend tortor massa, quis laoreet nunc bibendum id. Sed bibendum, erat sit amet ultrices faucibus, augue ipsum commodo metus, ut pretium sapien leo in lectus. Mauris nec iaculis lorem. Vestibulum fermentum maximus malesuada.</p>
            </div>
            <div className='p-4 '>
                <img src={map} className='rounded-2xl'></img>
            </div> 
        </div>
    </div>
    </div>
  );
}

export default Location;