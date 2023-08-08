import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const About = () => {
  
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageFileNames = [];
    const numberOfImages = 41; // Change this to the total number of images

    for (let i = 1; i <= numberOfImages; i++) {
      imageFileNames.push(`img${i}.jpeg`);
    }

    // Dynamically import all images and update the slides state
    Promise.all(
      imageFileNames.map((imageName) =>
        import(`../assets/home_imgs/${imageName}`).then((module) => ({
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
    <div className='bg-[#e3e3e3] p-2 md:p-4 justify-center flex items-center'>
    <div name="about" className=' bg-[#d7e0c8] md:p-8 p-4 rounded-3xl m-4 max-w-[1240px]' >
        <div className=' mx-auto grid md:grid-cols-2'>
            <div name='about' className='bg-[#d7e0c8] max-w-[1240px] h-[600px] w-full m-auto   relative group'>
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
            <div className='flex flex-col justify-center px-4 py-4 pb-12'>
                <p className='text-[#6D9775] font-bold'>ABOUT</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>CASA INTI</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius neque in sodales auctor. Vestibulum tincidunt tempor metus, a cursus augue aliquam vitae. Nullam ipsum massa, rutrum ac felis vel, pharetra malesuada ex. Duis convallis congue turpis, ut porta quam congue in. Phasellus nec magna tortor. Vivamus id est euismod, malesuada nibh a, sagittis eros. Quisque erat quam, tristique id sapien vehicula, aliquam varius nunc. Etiam eleifend tortor massa, quis laoreet nunc bibendum id. Sed bibendum, erat sit amet ultrices faucibus, augue ipsum commodo metus, ut pretium sapien leo in lectus. Mauris nec iaculis lorem. Vestibulum fermentum maximus malesuada.</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;