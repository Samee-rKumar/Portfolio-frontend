import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Myimage from '../assets/Myimage.png'
import { Link } from 'react-scroll'
import Intro from './Intro';

export default function Home() {
    return (
        <div name="home" className='md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white '>
            <div className='max-w-screen-lg mx-auto flex flex-col gap-8 items-center justify-center h-full px-4  md:flex-row-reverse md:gap-4 '>
                <div className='mt-28 md:mt-0'>
                    <img src={Myimage} alt="my img" className='rounded-2xl mx-auto w-3/4 md:w-full' />
                </div>
                <div className='flex flex-col justify-center items-center h-full w-3/4 md:items-start'>
                    <h2 className='text-4xl sm:text-5xl font-bold'>Hi! My name is Sameer Kumar and I am a {window.innerWidth > 900 ? <Intro></Intro> : 'Web Developer'}</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am a software engineer with a passion web development.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500}>
                            <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={20}></MdOutlineKeyboardArrowRight>
                                </span>
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}
