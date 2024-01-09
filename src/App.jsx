import './App.css'
import NavHeader from './components/NavHeader'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';














function App() {
  

  const mode = useSelector((state)=> state.mode.value)

  const dispatch= useDispatch()


  










  return (
   
   <>
   <NavHeader/>
   <Landing/>
   <AboutMe/>
   </>
      
    
   
  )
}

export default App
