import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

export default function Portfolio() {


    const portfolios = [
        {
            id: 1,
            source: arrayDestruct
        },
        {
            id: 2,
            source: reactParallax
        },
        {
            id: 3,
            source: navbar
        },
        {
            id: 4,
            source: installNode
        },
        {
            id: 5,
            source: reactSmooth
        },
        {
            id: 6,
            source: reactWeather
        }
    ]

    return (
        <div>
            <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen flex items-center'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8 mt-24 md:mt-0'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                            Portfolio
                        </p>
                        <p className='py-6'>
                            Check out some my work right here
                        </p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                        {portfolios.map((portfolio) => {
                            return <div key={portfolio.id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={portfolio.source} alt="" className='rounded-md hover:scale-105 duration-300' />
                                <div className='flex'>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Demo
                                    </button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Code
                                    </button>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
