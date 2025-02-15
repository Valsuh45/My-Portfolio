import React from 'react'
import Image from 'next/image'
import expressjs from '../assets/LaguageAssets/ExpressJS.png';
import react from  '../assets/LaguageAssets/ReactLogo.png';
import typeScript from  '../assets/LaguageAssets/TypescriptLogo.png';
import nodejs from  '../assets/LaguageAssets/NodeJS.png';
import git from  '../assets/LaguageAssets/git.jpg';
import Java from '../assets/LaguageAssets/Java.png';
import Docker from '../assets/LaguageAssets/Docker.jpg';
import Postgres from '../assets/LaguageAssets/Postgres.png';
import JavaScript from '../assets/LaguageAssets/JavaScript.png';

const Experience = () => {

    const pLanguages = [
        {
            id: 1,
            image: expressjs,
            title: 'expressjs',
            style: 'shadow-red-200'
        },
        {
            id: 2,
            image: nodejs,
            title: 'nodejs',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            image: react,
            title: 'React JS',
            style: 'shadow-purple-300'
        },
        {
            id: 5,
            image: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            image: typeScript,
            title: 'TypeScript',
            style: 'shadow-blue-200'
        },
       
        {
            id: 8,
            image: git,
            title: 'Git',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            image: Java,
            title: 'Java',
            style: 'shadow-red-700'
        },
        {
            id: 10,
            image: Docker,
            title: 'Docker',
            style: 'shadow-blue-700'
        },
        {
            id: 10,
            image: Postgres,
            title: 'PostgreSQL',
            style: 'shadow-orange-700'
        }
       
     
    ]
  return (
    <div data-name='experience' id='experience' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen flex justify-center items-center '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2 opacity-55'> Experience</p>
                <p className='py-6 opacity-55'>Programming langauges and framewords I've worked with</p>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0'>

                {pLanguages.map(({id, title, image, style}) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <Image src={image} alt='dsfed'className='w-20 mx-auto' />
                        <p className='mt-4'>
                            {title}
                        </p>
                        </div>
                ))}
             
            </div>
        </div>
        
    </div>
  )
}

export default Experience