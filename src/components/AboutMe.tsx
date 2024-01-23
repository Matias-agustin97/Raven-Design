import React from 'react'
const java_logo= require("../assets/svg/java_logo.svg")
const jsLogo = require("../assets/svg/javascript_logo.svg")
const reactLogo = require("../assets/svg/react-2.svg")
const hostingerLogo =require("../assets/svg/hostinger_logo.svg")




const stackItems=[{
  logo:reactLogo,
  altText:"React logo",
  titulo:"React",
  body:"React nos permite mantener un ambiente de desarollo mas organizado, separando los componentes de la UI en modulos y agregandole interactividad"
},
{
  logo:jsLogo,
  altText:"Javascript logo",
  titulo:"Javascript",
  body:"Javascript es el motor detras de React, tambien utilizado de manera independiente para agregar interactividad a la web, asi como tambien de backend para una aplicacion"
},
{
  logo:java_logo,
  altText:"Java Logo",
  titulo:"Java",
  body:"Java como lenguaje de backend nos prove una robusta libreria de herramientas y frameworks para poder llevar a cabo tus aplicaciones"
},
{
  logo:hostingerLogo,
  altText:"Hostinger logo",
  titulo:"Hostinger",
  body:"Nuestro hosting dedicado nos brinda la velocidad optima para tu pagina"
}
]

function AboutMe() {
  return (
    <section className="aboutMe-cont">
       
    </section>
  )
}

export default AboutMe