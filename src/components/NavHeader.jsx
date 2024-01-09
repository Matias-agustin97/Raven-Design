
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavButton from './NavButton'


function NavHeader() {

    const [theme, setTheme] = useState(false)

   
    const [scrolled, setScrolled] = useState("")
    const mode = useSelector((state)=>state.mode.value)
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 100) {
                setScrolled('');
            } else {
                setScrolled('header-scrolled');
            }
        });
    }, [])
    
   



  return (
    <header className={"header "+scrolled}>
        <div className="header-cont">
            <div className="theme-switch-cont">
                <span></span>
                <label className="switch" >
                    <input type="checkbox" checked={theme} onChange={()=>setTheme((state)=>!state)}/>
                     <span className="slider round"></span>
                </label>
            </div>
            <div className="header-heading">
                <span>Raven Design</span>
            </div>
            <div className="nav-menu">
                <ul className="nav-menu-list">
                  <NavButton content="home"/>
                  <NavButton content="sobre mi"/>
                  <NavButton content ="Portafolio"/>
                  <NavButton content="Contacto"/>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default NavHeader