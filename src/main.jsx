import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProviders from './providers/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' px-5'>
      <AuthProviders><RouterProvider router={router} /></AuthProviders>
    </div>
  </React.StrictMode>,
)
