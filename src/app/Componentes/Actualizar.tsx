import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pedido } from '../Interfaces/IFormulario'
import { actualizarPedido, obtenerPedido, eliminarPedido } from '../Firebase/Promesas';

export const Actualizar = () => {
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
  
  
  const actualizar = ()=>{

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
    //actualizar
    actualizarPedido(idPedido,p).then(()=>{
        alert("Se actualizo con exito")
    })
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
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/>

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
        <input type="text"  // Falta incorporar el input de tipo radio
          onChange={(e)=>setTipoPago(e.target.value)}
          value={tipoPago}
          /><br/>
        
        <label>Hora de Entrega: </label><br/>
        <input type="time"
          onChange={(e)=>setHoraEntrega(e.target.value)}
          value={horaEntrega}
          /><br/>

        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}

