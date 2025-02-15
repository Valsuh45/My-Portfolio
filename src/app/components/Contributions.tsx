'use client'
import React from 'react'
import Image from 'next/image'
import  online from '../assets/projectAssets/online.jpg'


const Contributions = () => {

    const projects =[
       
        {
            id: 1,
            scr: online,
            url: 'https://github.com/Awambeng/online-inventory-system'
        }
        
    ]

  return (
    <div data-name ="contributions" id='contributions' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500  opacity-55'> Contributions</p>
                <p className='py-6 opacity-55'> Check out some of the projects I've contributed to so far </p>
            </div> 

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center'>
            {projects.map(({id, scr, url}) =>(
                 <div key={id} className=' shadow-md shadow-gray-600 rounded-lg' >
                 <Image src={scr} alt = '' width={200} height={100} className='rounded-md duration-200 hover:scale-105 m-auto' />
                 <div className='items-center flex justify-center'>
                     <button  className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 opacity-55'>Demo</button>
                     <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 opacity-55'> <a href={url} target='blank'>Code</a> </button>
                 </div>
             </div>
))}   
           
               
            </div>
        </div>
    </div>
  )
}

export default Contributions