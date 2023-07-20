import React from 'react'
import {AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai'
import {FaAirbnb} from 'react-icons/fa'
import {TbBrandBooking} from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='bg-[#E3E3E3] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#6D9775]'>CASA INTI</h1>
            <h2 className='w-full text-2xl font-bold text-black text-right'>Contact Us</h2>
            <p className='py-4 text-black'>Patrícia Estrela</p>
            <p className=' text-black'>+351 912345678</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <AiOutlineInstagram size={30} className='inline-block text-[#6D9775]'/>
                <AiOutlineFacebook size={30} className='inline-block text-[#6D9775]'/>
                <FaAirbnb size={30} className='inline-block text-[#6D9775]'/>
                <TbBrandBooking size={30} className='inline-block text-[#6D9775]'/>
            </div>
        </div>
    </div>
  )
}

export default Footer