import { Link, useLocation, useNavigate } from "react-router-dom"
import Nav from "../../Components/Nav/Nav"
import { useContext } from "react"
import { AppContext } from "../../AppContextProvider/AppContextProvider"

const Login = () => {
  const { signInWithEmail, user, loading } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmail(email, password);

    if(!loading && location.state){
      navigate(location.state)
    }else{
      navigate('/')
    }
  }

  return (
    <div>
      <Nav></Nav>
      <div className="flex items-center justify-center h-[90vh]">
        <div className="min-w-[300px] max-w-md w-full border rounded-lg shadow-lg mx-auto">
          <form onSubmit={handleLogin} className="card-body mb-0 pb-3">
            <h1 className="text-2xl font-bold">Log In</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white hover:bg-slate-800">Login</button>
            </div>
          </form>
          <p className="pl-10 mb-10 mt-0">Don't have an account? <Link className="underline font-semibold" to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
