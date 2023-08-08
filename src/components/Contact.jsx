import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1msckcf', 'template_isozyec', form.current, 'cIdKbwot8UbqV6DKx')
      .then((result) => {
        console.log(result.text);
        console.log('Message sent successfully!');
        setIsMessageSent(true);
        // Clear the form after successful submission
        form.current.reset();
        // Hide the pop-up message after 3 seconds (adjust the timeout as needed)
        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div name='contact' className=' h-screen bg-[#6D9775] flex justify-center items-center p-4'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-black border-b-4 border-[#e3e3e3]'>Contact</p>
          <p className='text-[#e3e3e3] py-4'>Submit the form below or send us an email - casainti@gmail.com</p>
        </div>
        <input type="text" name="user_name" className='bg-[#e3e3e3] p-2 rounded-xl' placeholder='Name' />
        <input className='my-4 p-2 bg-[#e3e3e3] rounded-xl' type="email" placeholder='Email' name='user_email' />
        <textarea className='bg-[#e3e3e3] p-2 rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
        <input className='text-white border-2 bg-[#417154] hover:bg-[#e3e3e3] hover:border-[#417154] hover:text-black px-4 py-3 my-8 mx-auto flex items-center rounded-xl font-bold' type="submit" value="Send" />
      </form>

      {/* Show the pop-up message if isMessageSent is true */}
      {isMessageSent && (
        <div className="fixed top-4 right-4 bg-[#417154] text-white px-8 py-4 rounded text-2xl">
          Message sent
        </div>
      )}
    </div>
  );
};

export default Contact;
