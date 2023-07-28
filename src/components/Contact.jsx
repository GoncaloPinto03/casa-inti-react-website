import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#6D9775] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-black border-b-4 border-[#e3e3e3]'>Contact</p>
                <p className='text-[#e3e3e3] py-4'>Submit the form below or send us an email - casainti@gmail.com</p>
            </div>
            <input className='bg-[#e3e3e3] p-2 rounded-xl' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e3e3e3] rounded-xl' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e3e3e3] p-2 rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 bg-[#417154] hover:bg-[#e3e3e3] hover:border-[#417154] hover:text-black px-4 py-3 my-8 mx-auto flex items-center rounded-xl font-bold'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact