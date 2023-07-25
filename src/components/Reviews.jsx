import React from 'react'
import Window from '../assets/img2.jpeg'

const Reviews = () => {
  return (
    <div name="reviews" className='bg-[#E3E3E3] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 rounded-[20px]' src={Window} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#6D9775] font-bold'>REVIEWS</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Peter Parker</h1>
                <p>I had a truly outstanding stay at this Airbnb! The host's communication was excellent from the beginning, and the place was beautifully decorated and impeccably clean. The amenities provided were top-notch, and the location was perfect - close to attractions yet peaceful. What made it even better was the host's warm hospitality and helpful local tips. I felt valued and cared for throughout my stay. I highly recommend this place for an unforgettable experience!</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews