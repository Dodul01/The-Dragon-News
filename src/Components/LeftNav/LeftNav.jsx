import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { useContext } from "react";
import { AppContext } from "../../AppContextProvider/AppContextProvider";

const LeftNav = () => {
  const { signInWithGoogle, user } = useContext(AppContext);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  }

  return (
    <div className="p-2 min-w-[280px]">
      {!user &&
        <div>
          <h1 className='text-xl font-bold'>Login With</h1>
          <button onClick={handleGoogleLogin} className="flex items-center justify-center hover:bg-black hover:text-white border-2 border-solid border-gray-300 w-full rounded-lg p-2 mt-3 font-semibold">
            <FcGoogle className="text-xl cursor-pointer mr-1"></FcGoogle>
            Login With Google
          </button>
          <button className="flex items-center justify-center hover:bg-black hover:text-white border-2 border-solid border-gray-300 w-full rounded-lg p-2 mt-3 font-semibold">
            <AiFillGithub className="text-xl cursor-pointer mr-1"></AiFillGithub>
            Login With Github
          </button>
        </div>
      }
      <div>
        <h1 className='text-xl font-bold'>Follow Us On</h1>
        <button className="flex items-center justify-center hover:bg-black hover:text-white border-2 border-solid border-gray-300 w-full rounded-lg p-2 mt-3 font-semibold">
          <BsFacebook className="text-xl cursor-pointer mr-1"></BsFacebook>
          Facebook
        </button>
        <button className="flex items-center justify-center hover:bg-black hover:text-white border-2 border-solid border-gray-300 w-full rounded-lg p-2 mt-3 font-semibold">
          <AiFillInstagram className="text-xl cursor-pointer mr-1"></AiFillInstagram>
          Instagram
        </button>
        <button className="flex items-center justify-center  hover:bg-black hover:text-white border-2 border-solid border-gray-300 w-full rounded-lg p-2 mt-3 font-semibold">
          <FaTwitter className="text-xl cursor-pointer mr-1"></FaTwitter>
          Twitter
        </button>
      </div>
    </div>
  )
}

export default LeftNav;