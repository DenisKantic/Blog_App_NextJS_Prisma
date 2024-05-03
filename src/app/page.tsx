import Image from "next/image";
import image from './fotka.png'
import getSession from '@/lib/getSession'
import SignInBtn from "./SignInBtn";
import SignOut from './SignOut'

export default async function Home() {

  const session = await getSession();
  const user = session?.user;

  return (
    <div className="h-screen">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Web Shop</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
          src={user?.image || image}
          alt={user?.name || "test" }
          height={50}
          width={50}
          />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">{user?.name}</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        {!user ? <SignInBtn /> : <SignOut />  }
      </ul>
    </div>
  </div>
</div>
    </div>
  );
}
