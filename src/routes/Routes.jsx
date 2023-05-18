import { createBrowserRouter } from "react-router-dom";
import Main from "../outLet/Main";
import Home from "../components/home/Home";
import Login from "../outLet/login/Login";
import Register from "../outLet/register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddToys from "../components/toys/addToys/AddToys";
import AllToys from "../components/toys/allToys/AllToys";
import MyToys from "../components/toys/myToys/MyToys";
import UpdateToys from "../components/toys/myToys/UpdateToys";
import ToyDetails from "../components/toys/toyDetails/ToyDetails";
import Blogs from "../components/blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path: '/add-toys',
        element: <AddToys></AddToys>
      },
      {
        path: 'all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/addtoys')
      },
      {
        path: '/my-toys',
        element: <MyToys></MyToys>
      },
      {
        path: 'update/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`http://localhost:5000/addtoys/${params.id}`)
      },
      {
        path: 'toy-details/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/addtoys/${params.id}`)
      }

    ]
  },
]);
export default router;