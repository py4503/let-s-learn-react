import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link } from 'react-router-dom'
import { Home,About,Github,Play,User,Git} from './components/Index.jsx'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router-dom'
import Subscribe from './components/Subscribe/Subscribe.jsx'
// import Play from './components/Play/Play.jsx'
import { useParams } from 'react-router-dom'
// import { imageLoader } from './components/Git/Git.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"Videos",
        element:<About/>
      },
      {
        path:"Join",
        element:<Github/>
      },
      {
        path:"Play",
        element:<Play/>
      },
      {
        path:"Subscribe",
        element:<Subscribe/>
      },
      {
        path:"user/:id",
        element:<User/>
      },
      {
        path:"H",
        element:<Git/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
