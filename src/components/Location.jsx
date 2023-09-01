import React from 'react';

const Location = () => {
  


  return (
    <div className='bg-[#263126] p-2 justify-center flex items-center'>
    <div name="location" className=' bg-[#d7e0c8] p-2 md:p-4 rounded-3xl m-4 w-[1240px]'>
        <div className='max-w-[1240px] mx-auto'>        
            <div className='flex flex-col justify-center px-4 py-4'>
                <p className='text-[#6D9775] font-bold'>LOCATION</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>CASA INTI</h1>
            </div>
            <div className='p-4 flex'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7325747890472!2d-25.30962632336448!3d37.772868271985864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb5d2037dc196ed1%3A0xa5b818674eece03d!2sCASA%20INTI%20%2F%20INTI%20HOUSE%20FURNAS!5e0!3m2!1spt-PT!2spt!4v1691669412443!5m2!1spt-PT!2spt"  className='rounded-xl w-full h-[700px]' style={{border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> 
        </div>
    </div>
    </div>
  );
}

export default Location;