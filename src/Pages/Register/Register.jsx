import { Link } from "react-router-dom"
import Nav from "../../Components/Nav/Nav"
import { FcGoogle  } from 'react-icons/fc'
import {AiFillGithub , AiFillTwitterCircle} from 'react-icons/ai'
import { useContext } from "react"
import { AppContext } from "../../AppContextProvider/AppContextProvider"

const Register = () => {
  const {signUpWithEmail} = useContext(AppContext);

  const registerUser = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signUpWithEmail(email, password);
  }

  return (
    <div>
      <Nav></Nav>
      <div className="flex items-center justify-center h-[90vh]">
        <div className="min-w-[300px] max-w-md w-full border rounded-lg shadow-lg mx-auto">
          <form onSubmit={registerUser} className="card-body mb-0 pb-3">
            <h1 className="text-2xl font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-black text-white hover:bg-slate-800">Register</button>
            </div>
          </form>
          <p className="pl-10 mb-3 mt-0">Already have an account? <Link className="underline font-semibold" to="/login">Log In</Link></p>
          <hr />
          <p className="text-center  mb-2 text-gray-500">Continue With</p>
          <div className="mb-8 flex items-center justify-center">
            <div className="flex gap-1">
              <FcGoogle className="text-2xl cursor-pointer"></FcGoogle>
              <AiFillGithub className="text-2xl cursor-pointer"></AiFillGithub>
              <AiFillTwitterCircle className="text-2xl cursor-pointer text-blue-700"></AiFillTwitterCircle>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
