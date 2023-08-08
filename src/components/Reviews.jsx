import React, {useState} from 'react'
import Window from '../assets/img2.jpeg'

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


const Reviews = () => {

  const [currentReview, setCurrentReview] = useState(0);

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviewsData.length) % reviewsData.length);
  };

  return (

    <div name="reviews" className='bg-[#E3E3E3] md:py-16 md:px-4 p-8'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#6D9775] font-bold'>REVIEWS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{reviewsData[currentReview].name}</h1>
          <p className='text-justify'>{reviewsData[currentReview].content}</p>

          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevReview}
              className="bg-[#6D9775] hover:bg-[#5b8364] text-white px-4 py-2 mr-4 rounded"
            >
              Prev
            </button>
            <button
              onClick={handleNextReview}
              className="bg-[#6D9775] hover:bg-[#5b8364] text-white px-4 py-2 rounded"
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