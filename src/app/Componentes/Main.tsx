import React from 'react'
import Vegetariana from "../img/vegetariana.png"
export const Main = () => {
  return (
    <div>
      <h1 className='main-titulo'>BIENVENIDO A PIZZAS KAIVLU</h1>
      <p className='main-parrafo'>Pizza Kaivlu es una pequeña cadena de restaurantes regional chilena fundada en 1998 en la region de Atacama, Caldera por los hermanos Ivan y Ruben Arce. Ofrece una autentica pizza con todo el sabor artesanal además de otros deliciosos platillos italianos, como pastas y postres</p>
      <div>
        <img className='main-imagen' src={Vegetariana.src} alt="Pizza Vegetariana"/>
        <h1 className='main-subTitulo'>Prueba nuestra pizza vegetariana</h1>
      </div>
    </div>
  )
}