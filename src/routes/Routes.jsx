// import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SingUp";
import AddToys from "../pages/AddToys/AddToys";
import Details from "../pages/Details/Details";
import MyToys from "../pages/Home/MyToy/MyToy";
import AllToys from "../pages/Home/AllToy/AllToy";
import Error404 from "../LayOuts/Error404";
import PraivateRoute from "./PraivateRoute";
import Blog from "../pages/Blog/Blog";
// import PraivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      
      {
        path: "/login",
        element: <Login></Login>,
       },
        {
        path: "/signup",
        element: <SignUp></SignUp>,
        },         
        {
        path: "/addToy",
        element: (
            <PraivateRoute>
            <AddToys></AddToys>
            </PraivateRoute>),
        },
        {
            path: "/deatils/:_id",
            element: (
              // <PrivateRoute>
                <Details></Details>
              // </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(
                `https://toy-shop-server-eta.vercel.app/AddToy/${params._id}`
              ),
          },
          {
            path: "/myToys",
            element: (
                <PraivateRoute>
                    <MyToys></MyToys>
                </PraivateRoute>
            )
          },
          {
            path: "/allToys",
            element: <AllToys></AllToys>
          },
          {
            path: "/blogs",
            element: <Blog></Blog>
          },
      
    ],
    errorElement: <Error404></Error404>
}
])

export default router;