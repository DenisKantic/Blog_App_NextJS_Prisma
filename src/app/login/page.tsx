import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='h-screen bg-base-100'>
    <h1 className='py-10 text-2xl uppercase text-center'>Login</h1>

        <form className='w-[30%] h-auto bg-slate-400 p-5 rounded mx-auto flex flex-col justify-center items-start'>
        <label>
          Enter your email
        </label>
        <input type="email" className='input p-2 my-2 w-full' name='email' required />

        <br />

        <label>Enter your password</label>
        <input type="password" className='input p-2 my-2 w-full' name='email' required />

        <button type='submit' className='btn btn-primary w-full text-white text-lg my-5'>Login</button>

        <label className='text-center text-lg w-full'>Or better yet, login with your Google Account</label>
        <button className='btn btn-success my-2 w-full text-white text-lg'>Login with Google</button>

        <p className='text-center w-full py-2'>{"Don't"} have an account? <Link href="/register" className='underline'>Register here</Link></p>
        </form>
        </div>
  )
}
