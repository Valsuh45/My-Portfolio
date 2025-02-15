
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Socials = () => {

    const socialLinksIcons = [
        {
            id: 1,
            child: (
                <>
                LinkedIn
                <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/fuh-valantine-4a05602a3/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub
                <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Valsuh45',
        
        },
        {
            id: 3,
            child: (
                <>
                Mail
                <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto: fuhvalentinesuh@gmail.com',
       
        },
        {
            id: 4,
            child: (
                <>
                Resume
                <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: './resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {socialLinksIcons.map(({id, child, href, style, download}) =>(
      <li key={id} className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style }>
         <a href={href}
          className='flex justify-between items-center w-full text-white'
          download={download}
          target='_blank'

          >
             <>
             {child}
             </>

         </a>
     </li>
            ))}
      
        </ul>
    </div>
  )
}

export default Socials