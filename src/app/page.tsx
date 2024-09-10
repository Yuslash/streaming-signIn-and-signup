'use client'

import { useState } from "react"

interface email {
  id: string
  email: string
}

export default function Home() {

  const [users, setUsers] = useState<email[]>([])
  const [email, setEmail] = useState<string>('')

  const addUsers = async () =>
  {
    await fetch('api/users',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body:JSON.stringify({email})
    })

    alert('Your Email has been added to Database')
  }


return <>
    <div className="main-body ">
      <div className="image-container">
        <img src="/spacship.jpg" alt="image" />
      </div>
      <div className="login-page flex-col flex flex-start">
        <div className="sign-button flex w-full py-4 px-9">
          <a className="text-sm text-right font-bold w-full text-white " href="http://localhost:3000/signin">HAVE AN ACCOUNT?<span className="text-white ml-2">SIGN IN</span></a>
        </div>
        <div className="sambar flex flex-col w-full mt-40 h-full">
          <div className="sambar-2 w-full text-white text-6xl font-bold">SIGN UP</div>
          <span className="red-roses text-sm text-white mt-6 tracking-wider">Sign In with email address</span>
          <input 
            className="enter-email text-cyan-400"
            placeholder="Sambar.design@gmail.com"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}

          ></input>
          <button onClick={addUsers} className="email-button">CONTINUE</button>
          <div className="outh-con flex flex-col h-full">
            <span className="red-roses text-white mt-6 text-xs">Or continue with open  acoount</span>
            <div className="out-buttons flex w-full ">
              <button className="google-button flex items-center px-5 gap-2 justify-center w-full py-3 bg-amber-300">
                <img src="/Google.png"></img>
                <span className="text-xs">GOOGLE</span>
              </button>
              <button className="google-button flex items-center px-5 gap-2 justify-center w-full py-3 bg-amber-300">
                <img src="/Facebook.png"></img>
                <span className="text-xs">FACEBOOK</span>
              </button>
            </div>
            <span className="red-roses text-white text-xs">By registering you agree with our <span className=" text-blue-500">Terms & Conditions</span></span>
            <span className="red-roses text-center mt-10 text-gray-400 text-xs">COPYRIGHT (C) 2024 YUSLASH DESIGN</span>
          </div>
        </div>
      </div>
    </div>
  </>
}