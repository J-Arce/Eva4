import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pedido } from '../Interfaces/IFormulario'
import { actualizarPedido, obtenerPedido, eliminarPedido } from '../Firebase/Promesas';

export const Actualizar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
    const [errorNombre, setErrorNombre] = useState("")
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState('');
    const [telefono, setTelefono] = useState("")
    const [errorTelefono, setErrorTelefono] = useState('');
    const [tipoPizza, setTipoPizza] = useState("")
    const [cantidadPizza, setCantidadPizza] = useState("")
    const [errorCantidadPizza, setErrorCantidadPizza] = useState('');
    const [codigoDescuento, setCodigoDescuento] = useState("")
    const [tipoPago, setTipoPago] = useState("")
    const [horaEntrega, setHoraEntrega] = useState("")
    const [idPedido,setIdPedido] = useState("")

    const cambiosSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setTipoPizza(e.target.value);
    };
  
    const cambiosRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTipoPago(e.target.value);
    };

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
  const cambioEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  
      if (!value.trim()) {
        setErrorEmail('El campo de email no puede estar vacío.');
      } else if (!value.includes('@')) {
        setErrorEmail('El correo electrónico debe contener un "@".');
      } else {
        setErrorEmail('');
        }
      };
  const cambioTelefono = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTelefono(value);
  
      if (value.length < 9 || value.length > 9) {
        setErrorTelefono('El teléfono debe tener 9 números, Recuerde ingresar el 9 al comienzo.');
      } else if (!value.startsWith('9')) {
        setErrorTelefono('El teléfono debe comenzar con el número "9".');
      } else {
        setErrorTelefono('');
      }
    };
  const cambioCantidadPizza = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCantidadPizza(value);
  
      if (!value.trim()) {
        setErrorCantidadPizza('El campo de cantidad no puede estar vacío.');
      } else if (parseInt(value) <= 0) {
        setErrorCantidadPizza('La cantidad debe ser mayor a 0.');
      } else {
        setErrorCantidadPizza('');
        setCantidadPizza(value);
      }
    };

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
          onChange={cambioEmail}
          value={email}
          /><br/>
          {errorEmail && <div>{errorEmail}</div>}<br/>
        
        <label>Telefono: </label><br/>
        <input type="tel"
          onChange={cambioTelefono}
          value={telefono}
          /><br/>
          {errorTelefono && <div>{errorTelefono}</div>}<br/>

        <select id="opciones" value={tipoPizza} onChange={cambiosSelect}>
          <option value="">Seleccione una Pizza</option>
          <option value="vegetariana">Vegetariana</option>
          <option value="napolitana">Napolitana</option>
          <option value="pepperoni">Pepperoni</option>
          <option value="cuatroQuesos">Cuatro Quesos</option>
          <option value="hawaiana">Hawaiana</option>
        </select><br/><br/>

        <label>Cantidad: </label><br/>
        <input type="number"
          onChange={cambioCantidadPizza}
          value={cantidadPizza}
          /><br/>
          {errorCantidadPizza && <div>{errorCantidadPizza}</div>}<br/>
        
        <label>Codigo de Descuento: </label><br/>
        <input type="password"
          onChange={(e)=>setCodigoDescuento(e.target.value)}
          value={codigoDescuento}
          /><br/>

        <br/><label>Seleccione Metodo de Pago</label><br/><br/>

        <label>
          <input
            type="radio"
            value="efectivo"
            checked={tipoPago === 'efectivo'}
            onChange={cambiosRadio}
          />
          Efectivo<br/>
        </label>

        <label>
          <input
            type="radio"
            value="tarjeta"
            checked={tipoPago === 'tarjeta'}
            onChange={cambiosRadio}
          />
          Tarjeta<br/>
        </label>

        <label>
          <input
            type="radio"
            value="transferencia"
            checked={tipoPago === 'transferencia'}
            onChange={cambiosRadio}
          />
          Transferencia<br/>
        </label><br/>
        
        <label>Hora de Entrega: </label><br/>
        <input type="time"
          onChange={(e)=>setHoraEntrega(e.target.value)}
          value={horaEntrega}
          /><br/><br/>
        
        <button type='button' onClick={actualizar}>Actualizar</button>
        </div>
    </form>
  )
}
