import Image from "next/image";
import { useSession, signIn } from "next-auth/react";

function Pics() {

    const { data: session } = useSession();

    if (session){
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src="/cat.jpg" width="500" height="500" alt="" />
      </div>
    );} else {
        return (
        <div className="flex justify-center items-center h-screen">
            <h1>You have to login to see this page.</h1>
        </div>
        )
    }
}

export default Pics;