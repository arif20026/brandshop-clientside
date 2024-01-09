
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Cart from "../pages/cart/Cart";
import AddProduct from "../pages/addProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/errorPage/ErrorPage";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";
import Products from "../pages/Products/Products";
import CategoryProductDetails from "../categoryproductdetails/CategoryProductDetails";
import ProductDetails from '../pages/productDetails/ProductDetails'
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/products')
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
            element:<Cart></Cart>,
            loader: () => fetch('http://localhost:5000/cart')
        },
        {
            path:'/products',
            element:<Products></Products>,
            loader: () => fetch('http://localhost:5000/products')
        },
        {
            path:'/:brandName',
            element:<CategoryProductDetails></CategoryProductDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/${params.brandName}`)
        },
        {
            path:'/updateProduct/:id',
            element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:'/productDetails/:id',
            element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
      
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:'/updateProduct',
            element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
        }
      ]
    },
  ]);

  export default router