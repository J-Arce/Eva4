'use client'
import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className='header'>
      <div className='header-contenido'>
        <div className='header-nombreEmpresa'><h1>Pizza Kaivlu</h1></div>
        <div className='header-elemento'><Link to={"/"}>Home</Link></div>
        <div className='header-elemento'><Link to={"/carta"}>Carta</Link></div>
        <div className='header-elemento'><Link to={"/acerca"}>Acerca</Link></div>
        <div className='header-elemento'><Link to={"/locales"}>Locales</Link></div>
        <div className='header-elemento'><Link to={"/formulario"}>Formulario</Link></div>
        <div className='header-elemento'><Link to={"/mostrar"}>Registros</Link></div>
      </div>
    </header>
  )
}
