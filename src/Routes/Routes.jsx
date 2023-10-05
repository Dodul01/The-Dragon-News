import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        loader: ()=> fetch('../data/news.json'),
        element: <Home></Home>
      },{
        path: '/register',
        element: <Register></Register>
      },{
        path: '/login',
        element: <Login></Login>
      },{
        path: '/newsDetails/:id',
        loader: ()=> fetch('../data/news.json'),
        element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
      },{
        path: '/about',
        element: <About></About>
      },{
        path: '/career',
        element: <Career></Career>
      }

    ]
  }
]);

export default router;