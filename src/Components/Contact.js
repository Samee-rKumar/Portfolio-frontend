import React, { useState } from 'react'
import Loader from './Loader'
import REgistrationResult from './REgistrationResult'
import WrongEmail from './WrongEmail'


export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [isRequestCompleted, setisRequestCompleted] = useState(false)
    const [isLoaderRequired, setIsLoaderRequired] = useState(false)
    const [returnMsg, setReturnMsg] = useState('')
    const [isEmailWrong, setIsEmailWrong] = useState(false)

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if (emailPattern.test(email)) {
            setIsLoaderRequired(true)
            await fetch('https://portfolio-backend-nh5g.onrender.com/connect', {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    msg: msg
                }),
                method: 'POST'
            })
                .then(resp => {
                    if (resp.ok) {
                        return resp.json()
                    }
                    setisRequestCompleted(true)
                    setIsLoaderRequired(false)
                    setReturnMsg("Fail")
                    throw new Error("Some error occured. Status Code- " + resp.status)
                })
                .then(data => {
                    setisRequestCompleted(true)
                    setIsLoaderRequired(false)
                    setReturnMsg(data.returnMsg)
                })
                .catch(e => {
                    setIsLoaderRequired(false)
                })
        }
        else {
            setIsEmailWrong(true)
        }
    }

    return (
        <div name='contact' className='w-full min-h-screen flex items-center bg-gradient-to-b from-black to-gray-800 p-4 text-white static '>
            <div className='flex flex-col p-4 w-11/12 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                    <p className='py-6'>
                        Submit the form below to get in touch with me
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleOnSubmit} className='w-full md:w-1/2 gap-8 flex flex-col items-center'>
                        <input type="text" name="name" placeholder='Enter your name' value={name} onChange={(e) => { setName(e.target.value) }} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full' required />
                        <input type="email" name="email" placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full' required />
                        <textarea name="message" id="" cols="30" rows="10" value={msg} onChange={(e) => { setMsg(e.target.value) }} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full' required></textarea>
                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300'>
                            Connect with me
                        </button>
                    </form>
                </div>
            </div>
            {isEmailWrong ? <WrongEmail onCLickOk={setIsEmailWrong} ></WrongEmail> : <></>}
            {isLoaderRequired ? <Loader></Loader> : <></>}
            {isRequestCompleted ? <REgistrationResult isRequestCompleted={isRequestCompleted} afterRequestCompleted={setisRequestCompleted} returnMsg={returnMsg}></REgistrationResult> : <></>}
        </div>
    )
}
