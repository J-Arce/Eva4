import React from 'react'
import Mapa1 from '../img/Mapa1.png'
import Mapa2 from '../img/Mapa2.png'

export const Locales = () => {
  return (
    <div>
      <div>
        <h1 className='locales-titulo'>Conoce Nuestros Locales</h1>
        <h1 className='locales-h1'>Caldera</h1>
        <img className='locales-imagen' src={Mapa1.src} alt="Hubicacion Local Caldera" />
        <p className='locales-p'>Contamos con un local en Caldera, ubicado en la esquina Edwars con Ossa Cerda. Frente a "Ferreteria Bianchi"</p>
      </div>
      <div>
        <h1 className='locales-h1'>Copiapo</h1>
        <img className='locales-imagen' src={Mapa2.src} alt="Hubicacion Local Copiapo" />
        <p className='locales-p'>También contamos con un local en Copiapó, dentro de Mallplaza ubicado en Av. Copayapu con interseccion Maipú</p>
      </div>
    </div>
  )
}