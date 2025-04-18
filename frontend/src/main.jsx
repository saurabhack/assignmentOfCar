import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import  CarsProvider from './contextApi/carApi.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarsProvider>
    <RouterProvider router={router}/>
    </CarsProvider>
  </StrictMode>,
)
