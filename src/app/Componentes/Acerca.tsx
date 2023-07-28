import React from 'react'
import Agricola1 from '../img/agricola.png'
import Agricola2 from '../img/agricola2.png'
import Agricola3 from '../img/agricola3.png'

export const Acerca = () => {
  return (
    <div>
      <div className="acerca-imagen">
        <img src={Agricola1.src} alt="Campo Agricola" />
        <p className='acerca-p'>Durante nuestros más de 20 años de trayectoria siempre nos hemos enfocado en entregar el mejor servicio y sabor, llevando a tu mesa todo el sabor artesanal de nuestros mejores ingredientes</p>
      </div>
      <div className="acerca-imagen">
        <img src={Agricola2.src} alt="Tierra Arada" />
        <p className='acerca-p'>Nuestros ingredientes son 100% naturales, sin alteraciones o preservantes<br/><br/>Cada pizza, está preparada con tomates cultivados desde los mejores huertos de la región de atacama con el motivo de deleitar el paladar de cada cliente que pruebas nuestros platillos</p>
      </div>
      <div className="acerca-imagen">
        <img src={Agricola3.src} alt="Señor Agricola" />
        <p className='acerca-p'>Buscamos actualizarnos constantemente a las preferencias del cliente, es por ello que al realizar un pedido, pensamos en la atisfacción para pasar de ser una empresa a un ente de confianza cálidad</p>
      </div>
    </div>
  )
}