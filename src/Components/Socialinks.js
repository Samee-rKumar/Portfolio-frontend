import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Socialinks() {

    const links = [
        {
            id: 1,
            child: <>
                LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </>,
            href: 'https://linkedin.com/in/sameer-kumar-080354175',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: <>
                Github <FaGithub size={30}></FaGithub>
            </>,
            href: 'https://linkedin.com',
            style: ''
        },
        {
            id: 3,
            child: <>
                Mail <HiOutlineMail size={30}></HiOutlineMail>
            </>,
            href: 'mailto:sam210594@gmail.com',
            style: ''
        },
        {
            id: 4,
            child: <>
                Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            </>,
            href: '/Sameer-Kumar-Resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map((link) => {
                    return <li key={link.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px] ' + link.style}>
                        <a href={link.href} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer' download={link.download}>
                            <>
                                {link.child}
                            </>
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}
