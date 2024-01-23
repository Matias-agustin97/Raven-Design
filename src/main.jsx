import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {Provider} from "react-redux"
import store from './store.js'
import { createBrowserRouter } from 'react-router-dom'
import NavHeader from './components/NavHeader.jsx'
import Contacto from './pages/Contacto.js'


const router=createBrowserRouter([
  {
    path:"/",
    element:<NavHeader/>,
    children:[
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
    <App />
    </Provider>
  </React.StrictMode>,
)
