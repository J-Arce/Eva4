'use client'
import React, { useEffect, useState } from 'react'
import { Pedido } from '../Interfaces/IFormulario'
import { registrarPedido } from '../Firebase/Promesas'

export const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [tipoPizza, setTipoPizza] = useState("")
  const [cantidadPizza, setCantidadPizza] = useState("")
  const [codigoDescuento, setCodigoDescuento] = useState("")
  const [tipoPago, setTipoPago] = useState("")
  const [horaEntrega, setHoraEntrega] = useState("")
  
  const registrar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Pedido = {
        nombre,
        email,
        telefono,
        tipoPizza,
        cantidadPizza:parseInt(cantidadPizza),
        codigoDescuento,
        tipoPago,
        horaEntrega
    }
    registrarPedido(p)
    console.log(nombre);
    alert("Bienvenido "+nombre);
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }

  }
  return (
    <form>
      <div className='formulario-contenedor'>
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/
        >
        <label>Email: </label><br/>
        <input type="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          /><br/>
        
        <label>Telefono: </label><br/>
        <input type="tel"
          onChange={(e)=>setTelefono(e.target.value)}
          value={telefono}
          /><br/>
        
        <label>Indique el Tipo Pizza: </label><br/>
        <input type="" // Dudas sobre como hacer esto

          /*<label for="tipoPizza">Indique el Tipo de Pizza</label><br>
            <select id="tipoPizza">
                <option value="vacio">Indique una Pizza</option>
                <option value="vegetariana">Vegetariana</option>
                <option value="napolitana">Napolitana</option>
                <option value="pepperoni">Pepperoni</option>
                <option value="cuatroQuesos">Cuatro Quesos</option>
                <option value="hawaiana">Hawaiana</option>
            </select> */

          onChange={(e)=>setTipoPizza(e.target.value)}
          value={tipoPizza}
          /><br/>

        <label>Cantidad: </label><br/>
        <input type="number"
          onChange={(e)=>setCantidadPizza(e.target.value)}
          value={cantidadPizza}
          /><br/>
        
        <label>Codigo de Descuento: </label><br/>
        <input type="password"
          onChange={(e)=>setCodigoDescuento(e.target.value)}
          value={codigoDescuento}
          /><br/>

        <label>Tipo de pago: </label><br/>
        <input type=""  // Falta incorporar el input de tipo radio
          onChange={(e)=>setTipoPago(e.target.value)}
          value={tipoPago}
          /><br/>
        
        <label>Hora de Entrega: </label><br/>
        <input type="time"
          onChange={(e)=>setHoraEntrega(e.target.value)}
          value={horaEntrega}
          /><br/>

        <button type='button' onClick={registrar}>Registrar</button>
      </div>
    </form>
  )
}
