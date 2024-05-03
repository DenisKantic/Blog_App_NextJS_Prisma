"use client"
import { signIn } from "next-auth/react"

export default function SignInBtn() {
  return (
    <>
      <li><button onClick={()=>signIn()}>Login</button></li>
      </>
  )
}
