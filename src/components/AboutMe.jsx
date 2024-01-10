import React from 'react'
import JavaLogo from "../assets/svg/java_logo.svg"
import JsLogo from "../assets/svg/javascript_logo.svg"
import ReactLogo from "../assets/svg/react.svg"
import HostingerLogo from "../assets/svg/hostinger_logo.svg"
import { Javascript } from '@mui/icons-material'
import StackItem from './StackItem'



const stackItems=[{
  logo:ReactLogo,
  altText:"React logo",
  titulo:"React",
  body:"React nos permite mantener un ambiente de desarollo mas organizado, separando los componentes de la UI en modulos y agregandole interactividad"
},
{
  logo:JsLogo,
  altText:"Javascript logo",
  titulo:"Javascript",
  body:"Javascript es el motor detras de React, tambien utilizado de manera independiente para agregar interactividad a la web, asi como tambien de backend para una aplicacion"
},
{
  logo:JavaLogo,
  altText:"Java Logo",
  titulo:"Java",
  body:"Java como lenguaje de backend nos prove una robusta libreria de herramientas y frameworks para poder llevar a cabo tus aplicaciones"
},
{
  logo:HostingerLogo,
  altText:"Hostinger logo",
  titulo:"Hostinger",
  body:"Nuestro hosting dedicado nos brinda la velocidad optima para tu pagina"
}
]

function AboutMe() {
  return (
    <section className="aboutMe-cont">
        <div className="aboutMe-intro">
        <p>Sobre mi</p>
        <p>
            Me llamo Matias y soy desarollador web desde 2020, me especializo creando sitios estaticos para emprendedimientos y negocios.
        </p>
        <p>A diferencia de otros servicios como Wordpress, mis paginas estan hechas con React/Vanilla javascript lo que te asegura un SEO optimo para tu negocio.</p>
        <p>Tomo como prioridades darte la mayor cantidad de visitas organicas para el crecimiento de tu negocio, asi como brindarte una Interfaz de usuario Satisfactoria.</p>
        </div>
        <img src={JavaLogo} height="auto" width="1"/>
        <div className="myStack">
          <div>Mi Stack</div>
          <ul className='myStack-list'>
          {stackItems.map((item)=>{
           return (
            <StackItem logo={item.logo} altText={item.altText} titulo={item.titulo} body={item.body}/>
           )
           
          })}
          </ul>
        </div>
    </section>
  )
}

export default AboutMe