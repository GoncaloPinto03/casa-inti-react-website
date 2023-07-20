import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-black bg-[#E3E3E3]' >
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#6D9775] font-bold p-2'>FURNAS, AZORES</p>
            <h1 className='md-text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Enjoy your vacations.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Best place to </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={['Relax', 'Enjoy', 'Stay']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <div className=''>
                <button className='bg-[#6D9775] hover:bg-[#104730] hover:shadow-lg w-[300px] text-xl rounded-md font-medium my-6 mx-auto py-3 text-[#E3E3E3]'>Booking</button>
                <button className='bg-[#6D9775] hover:bg-[#104730] hover:shadow-lg w-[300px] text-xl rounded-md font-medium my-6 mx-auto py-3 text-[#E3E3E3]'>Airbnb</button>
            </div>
        </div>
    </div>
  )
}

export default Hero