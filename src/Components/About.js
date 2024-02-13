import React from 'react'

export default function About() {
    return (
        <div name="about" className=' md:h-screen w-full  bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mt-16 py-4 md:mt-0'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-10'>
                    I am an experienced software developer with a passion for creating innovative and generic solutions that are resuable across various projects being built for different clients. Proficient in multiple programming languages and frameworks, I specialize in Front-end develpoment with familiarisation to back-end development. Skilled in problem-solving and collaborative teamwork, I have a proven track record of delivering good quality work on time. My expertise includes technologies like JavaScript, React, Node.js, Microsoft SQL Server etc. and I am always eager to learn and adapt to new challenges.
                </p>
                <br />
                <p className='text-xl'>
                    Currently I am working as a Senior Software Engineer in Newgen Software since October 2021. There I created a module for document generation system that uses in depth knowledge of technologies like HTML, CSS, JavaScript, SQL, JAVA and Jsp. This module is generic and is used by numerous implementation teams to cater the requirements of different clients. Now I overlook this module and add several enhancements from time to time that come as new requirements from implementation team.
                </p>
            </div>
        </div>
    )
}
