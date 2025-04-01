import { useState } from 'react'
import card from '../assets/card2.jpg'

const LoginForm = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[100vh]">
      {/* Left side with image */}
      <div className="w-full lg:w-1/2 bg-[#546e7a] flex items-center justify-center p-5 lg:p-0">
        <img src={card} className="max-w-full max-h-full rounded-lg" alt="Credit Logo" />
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 p-5 flex items-center justify-center">
        <div className="w-full max-w-[400px]">
          <h3 className="text-center p-3 text-xl font-semibold">LOGIN</h3>
          <form className="w-full">
            <div className="mb-4">
              <label className="block p-2">Email/Username</label>
              <input
                type="text"
                className="w-full border-[1px] border-[#D9D9D9] p-3 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block p-2">Password</label>
              <input
                type="password"
                className="w-full border-[1px] border-[#D9D9D9] p-3 rounded-md"
              />
            </div>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between gap-5">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <label className="ml-2">Remember Me</label>
                </div>
                <a className="text-xs text-[#555555] underline mt-2 sm:mt-0">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="w-full bg-[#546e7a] text-center rounded-md">
              <button className="w-full p-3 text-white">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
