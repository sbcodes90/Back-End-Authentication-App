import React from 'react'

function SignUp() {
  return (
    <div className="h-screen flex items-center justify-center bg-teal-400">
    <div className="bg-white w-[600px] h-auto rounded-3xl mx-10 pb-10 border-teal-500 border-[10px]">
      <h1 className="text-3xl font-medium text-black text-center mt-[40px] mb-10">
        Sign Up
      </h1>

      <form method="post" className=" px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            for="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="flex items-center justify-between px-2">
          <button
            className="bg-black hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create Account
          </button>
          <a
            className="inline-block align-baseline font-bold text-lg text-teal-500 hover:text-teal-800"
            href="#"
          >
            Login
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp