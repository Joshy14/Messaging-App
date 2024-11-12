import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SignIn from './SignIn.jsx'
import './index.css'
import { AppProvider } from '@toolpad/core/AppProvider'
import{createBrowserRouter, RouterProvider,} from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element:<SignIn></SignIn>, 
  },
  {
    path: "app",
    element:<App></App>,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
     <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  </StrictMode>,
)
