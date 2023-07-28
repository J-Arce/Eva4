import React from 'react'
import Vegetariana from "../img/vegetariana.png"
import Napolitana from "../img/napolitana.png"
import Pepperoni from "../img/pizza_peperoni.png"
import Quesos from "../img/cuatro_quesos.png"
import Hawaiana from "../img/hawaiana.png"

export const Carta = () => {
  return (
    <div>
      <div className="carta-pizza">
        <img src={Vegetariana.src} alt="Pizza Vegetariana" />
        <p className='p'>*Queso<br/> *Aceitunas<br/> *Cebolla<br/> *Pimenton<br/> *Tomate<br/> *Champiñones</p>
      </div>
      <div className="carta-pizza">
        <img src={Napolitana.src} alt="Pizza Napolitana" />
        <p className='p'>*Queso<br/> *Aceitunas<br/> *Jamon<br/> *Tomate</p>
      </div>
      <div className="carta-pizza">
        <img src={Pepperoni.src} alt="Pizza Pepperoni" />
        <p className='p'>*Queso<br/> *Tomate<br/> *Pepperoni</p>
      </div>
      <div className="carta-pizza">
        <img src={Quesos.src} alt="Pizza Cuatro Quesos" />
        <p className='p'>*Queso Parmesano<br/> *Queso Motzarela<br/> *Queso Gorgonzola<br/> *Queso Fontina</p>
      </div>
      <div className="carta-pizza">
        <img src={Hawaiana.src} alt="Pizza Hawaiana" />
        <p className='p'>*Queso<br/> *Tomate<br/> *Jamon<br/> *Piña</p>
      </div>
    </div>
    
  )
}