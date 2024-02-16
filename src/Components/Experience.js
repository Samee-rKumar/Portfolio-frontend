import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import nodejs from '../assets/node.png'
import expressjs from '../assets/express.png'
import sql from '../assets/sql.png'
import java from '../assets/java.png'
export default function Experience() {


    const technologies = [

        {
            id: 1,
            name: 'HTML',
            src: html,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            src: css,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            name: 'JavaScript',
            src: javascript,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            name: 'React',
            src: reactImage,
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            name: 'TailWind CSS',
            src: tailwind,
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            name: 'Node Js',
            src: nodejs,
            style: 'shadow-green-500'
        },
        {
            id: 7,
            name: 'Express Js',
            src: expressjs,
            style: 'shadow-white'
        },
        {
            id: 8,
            name: 'SQL',
            src: sql,
            style: 'shadow-sky-400'
        },
        {
            id: 9,
            name: 'JAVA',
            src: java,
            style: 'shadow-red-400'
        }
    ]

    return (
        <div name='technologies' className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex items-center">
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='mt-24 md:mt-0'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Technologies
                    </p>
                    <p className='py-6'>
                        These are the technologies i have worked with
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {technologies.map((technology) => {
                        return <div key={technology.id} className={'shadow-md hover:scale-105 duration-300 py-2 rounded-lg ' + technology.style}>
                            <img src={technology.src} alt="" className='w-20 mx-auto ' />
                            <p className='mt-4'>
                                {technology.name}
                            </p>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}
