import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const reviewsData = [
  {
    name: 'Peter Parker',
    content: 'I had a truly outstanding stay at this Airbnb! The host\'s communication was excellent from the beginning, and the place was beautifully decorated and impeccably clean. The amenities provided were top-notch, and the location was perfect - close to attractions yet peaceful. What made it even better was the host\'s warm hospitality and helpful local tips. I felt valued and cared for throughout my stay. I highly recommend this place for an unforgettable experience!',
  },
  {
    name: 'John Doe',
    content: 'Another fantastic review goes here. John Doe had a great time at the Airbnb and appreciated the excellent services and amenities provided. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    content: 'My friends and I had an amazing time staying at this Airbnb! The place was spacious, clean, and beautifully decorated. The host was friendly and provided us with helpful recommendations for exploring the city. The location was ideal, close to restaurants and attractions. We will definitely book this place again on our next visit!',
  },
  {
    name: 'Sarah Johnson',
    content: 'What a wonderful experience! The hosts went above and beyond to make our stay comfortable and enjoyable. The apartment was well-maintained and had everything we needed. We loved the view from the balcony, and the neighborhood was quiet and safe. We can\'t wait to come back!',
  },
  {
    name: 'Michael Adams',
    content: 'Highly impressed with the attention to detail! The apartment was spotless and had all the amenities we needed for a pleasant stay. The location was convenient, with easy access to public transportation. The host was friendly and responsive to our inquiries. We had a great time and would highly recommend this place to others!',
  },
  // Add more reviews as needed
];

/*
const Reviews = () => {

  const [currentReview, setCurrentReview] = useState(0);

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviewsData.length) % reviewsData.length);
  };

  return (

    <div name="reviews" className='bg-[#263126] md:py-16 md:px-4 p-8'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#6D9775] font-bold'>REVIEWS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>{reviewsData[currentReview].name}</h1>
          <p className='text-justify text-[#d7e0c8] font-semibold'>{reviewsData[currentReview].content}</p>

          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevReview}
              className="bg-[#6D9775] hover:bg-[#5b8364] text-white px-4 py-2 mr-4 rounded font-semibold"
            >
              Prev
            </button>
            <button
              onClick={handleNextReview}
              className="bg-[#6D9775] hover:bg-[#5b8364] text-white px-4 py-2 rounded font-semibold"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Reviews
*/


const Reviews = () => {
  
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageFileNames = [];
    const numberOfImages = 8; // Change this to the total number of images

    for (let i = 1; i <= numberOfImages; i++) {
      imageFileNames.push(`review${i}.jpeg`);
    }

    // Dynamically import all images and update the slides state
    Promise.all(
      imageFileNames.map((imageName) =>
        import(`../assets/reviews/${imageName}`).then((module) => ({
          url: module.default,
        }))
      )
    ).then((importedSlides) => setSlides(importedSlides));
  }, []);

  if (slides.length === 0) {
    // Return a loading indicator or null while the images are being fetched
    return null;
  }

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='bg-[#263126] p-2 md:p-4 justify-center flex items-center'>
    <div name="reviews" className=' bg-[#d7e0c8] md:p-8 p-4 rounded-3xl m-4 zx w-[1240px]' >
        <div className=' mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center md:p-4 p-2 '>
            <p className='text-[#6D9775] font-bold'>REVIEWS</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>CASA INTI</h1>
          </div>
          <div name='about' className='bg-[#d7e0c8] max-w-[1240px] md:h-[600px] h-[400px] w-full m-auto relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Reviews;