import React from 'react'

export default function REgistrationResult({ isRequestCompleted, afterRequestCompleted, returnMsg }) {
    return (
        <>
            {isRequestCompleted ? <div className='backdrop-blur-sm bg-transparent fixed w-full h-screen flex justify-center items-center bottom-0 left-0'>
                <div className='bg-white h-1/5 w-2/3 sm:h-1/6 sm:w-1/6 flex flex-col justify-center items-center rounded-md px-2'>
                    <span className='font-bold text-sm sm:text-lg text-black text-center'>{returnMsg === "Success" ? "Thank You!!" : "Some error occured, Please try again later"}</span>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300' onClick={() => afterRequestCompleted(false)}>
                        OK
                    </button>
                </div>
            </div> : <></>}
        </>
    )
}
