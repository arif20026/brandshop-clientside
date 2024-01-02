
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Cart from "../pages/cart/Cart";
import AddProduct from "../pages/addProduct/AddProduct";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
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
        },
        {
            path:'/cart',
            element:<Cart></Cart>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        }
      ]
    },
  ]);

  export default router