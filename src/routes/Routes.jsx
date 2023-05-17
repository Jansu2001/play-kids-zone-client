import { createBrowserRouter } from "react-router-dom";
import Main from "../outLet/Main";
import Home from "../components/home/Home";
import Login from "../outLet/login/Login";
import Register from "../outLet/register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;