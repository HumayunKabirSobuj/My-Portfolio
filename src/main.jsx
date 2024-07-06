import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Page/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl	mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
