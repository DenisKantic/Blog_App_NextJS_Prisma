"use client"
import { signOut } from "next-auth/react"

export default function SignInBtn() {
  return (
    <>
      <li><button onClick={()=>signOut()}>Logout</button></li>
      </>
  )
}
