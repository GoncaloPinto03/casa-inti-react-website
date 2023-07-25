import React from 'react'
import Window from '../assets/img2.jpeg'

const About = () => {
    
    const homeImgs = [
        {Window}, 
        {Window},
        {Window},
    ]
  return (
    <div name="about" className='w-full bg-[#d7e0c8] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 rounded-[20px]' src={Window} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#6D9775] font-bold'>ABOUT</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>CASA INTI</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius neque in sodales auctor. Vestibulum tincidunt tempor metus, a cursus augue aliquam vitae. Nullam ipsum massa, rutrum ac felis vel, pharetra malesuada ex. Duis convallis congue turpis, ut porta quam congue in. Phasellus nec magna tortor. Vivamus id est euismod, malesuada nibh a, sagittis eros. Quisque erat quam, tristique id sapien vehicula, aliquam varius nunc. Etiam eleifend tortor massa, quis laoreet nunc bibendum id. Sed bibendum, erat sit amet ultrices faucibus, augue ipsum commodo metus, ut pretium sapien leo in lectus. Mauris nec iaculis lorem. Vestibulum fermentum maximus malesuada.</p>
            </div>
        </div>
    </div>
  )
}

export default About