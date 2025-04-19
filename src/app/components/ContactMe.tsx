import React from 'react'

const ContactMe = () => {
  return (
    <div id='contact'  data-name ='contact' className=' w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white' >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 opacity-55 '> Contact </p>
          <p className='py-6 opacity-55'> Get in Touch </p>
        </div>


        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/bmdkldxa" method='POST' className=' flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md
             text-white focus:outline-none' required />
            <input type="email" name='email' placeholder='Enter Your email' className='my-4 p-2 bg-transparent border-2 rounded-md
             text-white focus:outline-none' required />
             <textarea placeholder='Enter your message' name="message" rows={10} className='p-2 bg-transparent border-2 rounded-md
             text-white focus:outline-none '></textarea>

              <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
              flex items-center rounded-md hover:scale-110 duration-300 '> Send Chat </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe