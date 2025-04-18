import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Route.jsx'
import {
  RouterProvider,
} from "react-router";
 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ekhan theke router ta k abaar import kobo */}
    <RouterProvider router={router} />
  </StrictMode>,
)
