import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pedido } from '../Interfaces/IFormulario'
import { actualizarPedido, obtenerPedido, eliminarPedido } from '../Firebase/Promesas';

export const Eliminar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [tipoPizza, setTipoPizza] = useState("")
    const [cantidadPizza, setCantidadPizza] = useState("")
    const [codigoDescuento, setCodigoDescuento] = useState("")
    const [tipoPago, setTipoPago] = useState("")
    const [horaEntrega, setHoraEntrega] = useState("")
    const [errorNombre, setErrorNombre] = useState("")
    const [idPedido,setIdPedido] = useState("")

  useEffect(()=>{
    if(params.idPedido!=undefined){
       obtenerPedido(params.idPedido).then((v)=>{
        if(v!=undefined && v.idPedido!= undefined){
            setNombre(v.nombre)
            setEmail(v.email)
            setTelefono(v.telefono)
            setTipoPizza(v.tipoPizza)
            setCantidadPizza(""+v.cantidadPizza)
            setCodigoDescuento(v.codigoDescuento)
            setTipoPago(v.tipoPago)
            setHoraEntrega(v.horaEntrega)
            setIdPedido(v.idPedido)
        }
       })
    
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  },[])
  
  
  const eliminar = ()=>{
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
    //eliminar
    eliminarPedido(idPedido).then(()=>{
        alert("Se Elimino con exito")
    })
  }

  return (
    <form>
      <div className='formulario-contenedor'>
        <label>Nombre: </label><br/>
        <input type="text" 
          value={nombre}
          readOnly
          /><br/>

        <label>Email: </label><br/>
        <input type="email"
          value={email}
          readOnly
          /><br/>
        
        <label>Telefono: </label><br/>
        <input type="tel"
          value={telefono}
          readOnly
          /><br/>
        
        <label>Indique el Tipo Pizza: </label><br/>
        <input type="text" // Dudas sobre como hacer esto

          /*<label for="tipoPizza">Indique el Tipo de Pizza</label><br>
            <select id="tipoPizza">
                <option value="vacio">Indique una Pizza</option>
                <option value="vegetariana">Vegetariana</option>
                <option value="napolitana">Napolitana</option>
                <option value="pepperoni">Pepperoni</option>
                <option value="cuatroQuesos">Cuatro Quesos</option>
                <option value="hawaiana">Hawaiana</option>
            </select> */
          value={tipoPizza}
          readOnly
          /><br/>

        <label>Cantidad: </label><br/>
        <input type="number"
          value={cantidadPizza}
          readOnly
          /><br/>
        
        <label>Codigo de Descuento: </label><br/>
        <input type="password"
          value={codigoDescuento}
          readOnly
          /><br/>

        <label>Tipo de pago: </label><br/>
        <input type="text"  // Falta incorporar el input de tipo radio
          value={tipoPago}
          readOnly
          /><br/>
        
        <label>Hora de Entrega: </label><br/>
        <input type="time"
          value={horaEntrega}
          readOnly
          /><br/>

        <button type='button' onClick={eliminar}>Eliminiar</button>
      </div>
    </form>
  )
}