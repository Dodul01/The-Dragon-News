import { NavLink, useNavigate } from "react-router-dom"
import userImg from '../../assets/user.png'
import { useContext } from "react";
import { AppContext } from "../../AppContextProvider/AppContextProvider";

const Nav = () => {
  const { user, logOut } = useContext(AppContext);
  const navigate = useNavigate();

  const navLink = <>
    <NavLink className='mx-1 hover:font-semibold' to='/'>Home</NavLink>
    <NavLink className='mx-1 hover:font-semibold' to='/about'>About</NavLink>
    <NavLink className='mx-1 hover:font-semibold' to='/career'>Career</NavLink>
  </>

  const navigateToLogin = () => {
    navigate('/login')
  }

  const handleSignOut = () => {
    logOut()
  }

  return (
    <nav className="flex items-center justify-between w-[95vw] mt-4">
      <div></div>
      <div>{navLink}</div>
      <div className=" flex items-center">
        <div className="flex items-center mr-2">
          <div className="mr-1">
            <img className="h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : userImg} alt="" />
          </div>
          <div>
            <h4 className="font-semibold">{user?.displayName}</h4>
            <h4 className="font-semibold">{user?.email}</h4>
          </div>

        </div>
        {user ?
          <button onClick={handleSignOut} className="btn bg-black hover:bg-slate-800  text-white py-0 my-0 mx-1">Log Out</button>
          :
          <button onClick={navigateToLogin} className="btn bg-black hover:bg-slate-800  text-white py-0 my-0 mx-1">Log In</button>
        }
      </div>
    </nav>
  )
}

export default Nav
