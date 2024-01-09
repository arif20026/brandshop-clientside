import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import AuthProvider from './provider/AuthProvider'
import { CartProvider } from './contextApi/CartContext'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>

    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

    </CartProvider>
   
  </React.StrictMode>,
)
