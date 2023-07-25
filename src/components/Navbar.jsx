import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link, animateScroll as scroll } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(true)   

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black bg-[#E3E3E3]'>
        <h1 className='w-full text-3xl font-bold text-[#417154] cursor-pointer'><Link to="home" smooth={true} duration={500}>CASA INTI</Link></h1>
        <ul className='hidden md:flex font-bold text-xl'>
          <li className='p-4 cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='p-4 cursor-pointer'><Link to="about" smooth={true} offset={50} duration={500}>About</Link></li>
          <li className='p-4 cursor-pointer'><Link to="reviews" smooth={true} offset={50} duration={500}>Reviews</Link></li>
          <li className='p-4 cursor-pointer'><Link to="footer" smooth={true} offset={50} duration={500}>Contacts</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#E3E3E3] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#6D9775] m-4'>CASA INTI</h1>
          <ul className='uppercase p-4 font-bold'>
            <li className='p-4 border-b border-gray-600'>Home</li> 
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Reviews </li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar