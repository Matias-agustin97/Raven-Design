
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavButton from './NavButton'


function NavHeader() {

    const [theme, setTheme] = useState(false)

    const [mobileMenu,setMobileMenu]=useState(false)
   
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
            <div className={mobileMenu?"mobile-menu-active mobile-menu":"mobile-menu"} onClick={()=>setMobileMenu((state)=>!state)} >
            <span className={mobileMenu? "mobile-menu-bars mobile-bar-1": "mobile-menu-bars"}></span>
            <span className={mobileMenu? "mobile-menu-bars mobile-bar-2": "mobile-menu-bars"}></span>
            </div>
        </div>
    </header>
  )
}

export default NavHeader