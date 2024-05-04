import React from 'react'
import Link from 'next/link'
import { signIn, auth } from '@/auth'
import { redirect } from 'next/navigation';

export default async function GoogleRegister() {

  const session = await auth();
  const user = session?.user

  if(user){
    redirect('/')
  } else {
  return (
    <div className='h-screen w-full bg-base-100 flex justify-center items-center'>
         <form action={async ()=>{
          "use server"
          await signIn("google")
         }
         }
         className='w-[30%] h-auto bg-slate-400 p-5 rounded mx-auto flex flex-col justify-center items-start' >

          <p className='text-xl py-4 text-center w-full'>Proceed registering with your Google Account</p>
        
        <button className='btn btn-success my-2 w-full text-white text-lg' type='submit'>Register with Google</button>

        
        <p className='text-center w-full py-2'>Already have an account? <Link href="/login" className='underline'>Login here</Link></p>
      </form>
    </div>
  )
  }
}