import React from 'react'
import Vegetariana from "../img/pizza1.png"
export const Main = () => {
  return (
    <div>
      <h1>BIENVENIDO A PIZZAS KAIVLU</h1>
      <p>Pizza Kaivlu es una pequeña cadena de restaurantes regional chilena fundada en 1998 en la region de Atacama, Caldera por los hermanos Ivan y Ruben Arce. Ofrece una autentica pizza con todo el sabor artesanal además de otros deliciosos platillos italianos, como pastas y postres</p>
      <div>
        <img src={Vegetariana.src} alt="Pizza Vegetariana"/>
        <h1>Prueba nuestra pizza vegetariana</h1>
      </div>
    </div>
  )
}