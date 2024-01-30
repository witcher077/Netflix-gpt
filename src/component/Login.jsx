import React from 'react'
import { useState ,useRef} from 'react'
import Header from './Header'
import Validation from '../utils/Validation'

const Login = () => {
    const [showText,setShowText]=useState(false);
    const [isSignIn,setIsSignIn]=useState(true);

    const name=useRef('')
    const password=useRef('')
    const email=useRef('')
    let message=null;

    const textTogale=()=>{
        setShowText(!showText);
    }
    const signInTogle=()=>{
        setIsSignIn(!isSignIn)
    }

    const ClickHandler=()=>{

        console.log(email.current.value);
        console.log(password.current.value);

     message=Validation(email.current.value,password.current.value)
   
    console.log(message);
    }

  return (
    <div >
<Header/>
<div className='absolute '>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt="Background-Image" />
</div>
<div className='flex justify-center'>
<form onSubmit={(e)=>e.preventDefault()} className='absolute w-5/12 bg-black text-white flex flex-col p-6 opacity-80 rounded-lg mx-auto'>
        <h1 className='font-extrabold text-2xl my-4 mx-20'>{isSignIn?"Login":"Sign up"}</h1>
       {!isSignIn && <input ref={name} className=' bg-gray-700 p-3 w-8/12 rounded-lg my-4 mx-auto ' placeholder='Enter Full Name' type="text"></input>}
        <input ref={email} className=' bg-gray-700 p-3 w-8/12 rounded-lg my-3 mx-auto' placeholder='Enter your Email' type="Email"></input>
        <input ref={password} className=' bg-gray-700 p-3 w-8/12 rounded-lg my-3 mx-auto' placeholder='Enter Password' type="Password"></input>
        <p className=' text-red-600 font-semibold text-sm mx-16'>askdjnf</p>
        <button onClick={ClickHandler} className='bg-red-700  p-3 w-8/12 rounded-lg my-3 mx-auto' >{isSignIn?"Login":"Sign up"}</button>
        <p className='my-4 mx-auto  cursor-pointer'>Forgate Password?</p>
        <div className='my-2 mx-20'><input className='mr-3 cursor-pointer' type='checkbox'></input>Remember me</div>
        {isSignIn && <p className='my-2 mx-20 cursor-pointer' onClick={signInTogle}>New to Netflix? Sign up now.</p>}
        <p className='my-2 text-xs text-gray-400    mx-20'>This page is protected by Google reCAPTCHA to ensure you're not a bot. {!showText&&<span className=' underline text-blue-800 cursor-pointer' onClick={textTogale}>Learn more.</span>}
        </p>
        <p className='my-2 text-xs text-gray-400 mx-20'>{showText&&"The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google)."}</p>
    </form>
</div>
    
    </div>
  )
}

export default Login