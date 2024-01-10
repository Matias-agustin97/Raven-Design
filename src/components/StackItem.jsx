import React from 'react'

function StackItem({logo,altText,titulo,body}) {
  return (
    <li>
        <img src={logo} alt={altText} width="200px" height="auto"/>
        <div className="stack-li">
            <h5>{titulo}</h5>
            <p>{body}</p>
        </div>
    </li>
  )
}

export default StackItem