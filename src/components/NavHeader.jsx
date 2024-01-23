
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
      
    </header>
  )
}

export default NavHeader