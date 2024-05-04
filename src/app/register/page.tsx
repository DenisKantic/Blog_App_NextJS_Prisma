import Link from 'next/link'
import { redirect } from 'next/navigation'
import {auth} from "@/auth"

export default async function Register() {

  const session = await auth();
  const user = session?.user;

  if(user){
    redirect('/')
  } else {
  return (
    <div className='h-screen bg-base-100'>
            <h1 className='py-10 text-2xl uppercase text-center'>Register form</h1>

      <form className='w-[30%] h-auto bg-slate-400 p-5 rounded mx-auto flex flex-col justify-center items-start' >
        <label>
          Enter your email
        </label>
        <input type="email" className='input p-2 my-2 w-full' name='email'  required/>

        <br />

        <label>Enter your password</label>
        <input type="password" className='input p-2 my-2 w-full' name='password' required/>

        <button type='submit' className='btn btn-primary w-full text-white text-lg my-5'>Create your profile</button>

        <label className='text-center text-lg w-full'>Or better yet, use your Google Account</label>
        <Link className='btn btn-success my-2 w-full text-white text-lg' href='register/googleRegister'>Register with Google</Link>

        
        <p className='text-center w-full py-2'>Already have an account? <Link href="/login" className='underline'>Login here</Link></p>
      </form>
    </div>
  )
  }
}
