import React from 'react'

const NavButton = ({content}) => {
  return (
    <li>
        <a>
        <button className="ripple-navbtn">{content}</button>
        </a>
    </li>
  )
}

export default NavButton