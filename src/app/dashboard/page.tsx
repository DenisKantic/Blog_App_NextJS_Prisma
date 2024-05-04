import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function page() {

    const session = await getSession();
    const user = session?.user;

    if(!user){
        redirect('/login')
    }

  return (
    <div className='h-screen'>
      <h1>TEST</h1>
    </div>
  )
}
