import React from 'react'
import { signIn } from 'next-auth/react'

export default function SignInButton() {
  return (
    <>
      <button className='btn btn-success my-2 w-full text-white text-lg' onClick={()=>signIn()}>Register with Google</button>
    </>
  )
}
