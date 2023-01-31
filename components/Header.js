import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {

   const { data: session } = useSession();

    let logged = (
      <li className="mr-3">
        <Link href="/" onClick={() => signOut()}>
          Logout
        </Link>
      </li>
    );
    let notLogged = (
      <li className="mr-3">
        <Link href="/" onClick={() => signIn()}>
          Login
        </Link>
      </li>
    )
  
  return (
    <div className=" bg-black text-lg text-slate-100 h-14">
      <nav className="flex justify-between items-center p-3">
        <div className="font-bold ml-3">
          <Link href="/">
            <span>My Site</span>
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="flex items-center">
            <li className="mr-3">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-3">
              <Link href="/pics">Pics</Link>
            </li>
            <li className="mr-3">
              <Link href="/about">About</Link>
            </li>
            {session ? logged : notLogged}
          </ul>
        </div>
      </nav>
    </div>
  );
}
