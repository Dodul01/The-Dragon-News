import { useContext } from "react"
import { AppContext } from "../AppContextProvider/AppContextProvider"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AppContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center h-screen w-screen"><span className="loading loading-bars loading-lg"></span></div>
  } 

  if (user) {
    return children;
  }  
  
  return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoutes
