import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import {Provider} from "react-redux"
import store from './store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavHeader from './components/NavHeader.jsx'
import Contacto from './pages/Contacto.jsx'
import Landing from './pages/Landing.jsx'



const router=createBrowserRouter([
  {
    path:"/",
    element:<NavHeader/>,
    children:[
      {
        path:"/",
        element:<Landing/>
      },
      {
        path:"/contacto",
        element:<Contacto/>
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
