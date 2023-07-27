'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Main } from '../Componentes/Main'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import { Acerca } from '../Componentes/Acerca'
import { Carta } from '../Componentes/Carta'
import { Locales } from '../Componentes/Locales'
import { Eliminar } from '../Componentes/Eliminar'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Main/>}/>
        <Route path='/acerca' element={<Acerca/>}/>
        <Route path='/carta' element={<Carta/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/locales' element={<Locales/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPedido' element={<Actualizar/>}/>
        <Route path='/eliminar/:idPedido' element={<Eliminar/>}/>
    </Routes>
  )
}
