import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'

export default function Navbar() {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'technologies'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    const [nav, setNav] = useState(false)
    return (
        <div className='flex items-center justify-between w-full h-20 text-white fixed top-0 bg-black px-4'>
            <div className='w-fit min-w-fit'>
                <h1 className='text-4xl sm:text-5xl font-signature ml-2'>
                    Sameer's Portfolio
                </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map((link) => {
                    return <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 active:underline'><Link to={link.link} smooth duration={500}> {link.link}</Link></li>
                })}
            </ul>
            <div className='cursor-pointer pr-4 z-10 text-gray-500 block md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <FaTimes></FaTimes> : <FaBars></FaBars>}
            </div>
            {nav ? <ul className='flex flex-col justify-center items-start pl-4 backdrop-blur-lg duration-300 absolute top-0 -right-1/3 w-full h-screen  md:hidden'>
                {links.map((link) => {
                    return <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-2xl underline-offset-1 border-gray-500'><Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}> {link.link}</Link></li>
                })}
            </ul> : <ul className='flex flex-col justify-center items-start pl-4 backdrop-blur-lg duration-300 absolute top-0 -right-full w-full h-screen  md:hidden'>
                {links.map((link) => {
                    return <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-2xl underline-offset-1 border-gray-500'><Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}> {link.link}</Link></li>
                })}
            </ul>}

        </div>
    )
}
