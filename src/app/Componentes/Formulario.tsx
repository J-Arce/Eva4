'use client'
import React, { useEffect, useState } from 'react'
import { Pedido } from '../Interfaces/IFormulario'
import { registrarPedido } from '../Firebase/Promesas'

export const Formulario = () => {
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
  
  const cambiosSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoPizza(e.target.value);
  };

  const cambiosRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipoPago(e.target.value);
  };
  
  const registrar = ()=>{
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
    registrarPedido(p)
    console.log(nombre);
    alert("Registro exitoso señor/a: "+nombre);
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
      } else if (isNaN(Number(value))) {
        setErrorCantidadPizza('Debe ingresar solo números en el campo de cantidad.');
      } else if (parseInt(value) <= 0) {
        setErrorCantidadPizza('La cantidad debe ser mayor a 0.');
      } else {
        setErrorCantidadPizza('');
        setCantidadPizza(value);
    }
  };
  const hayErrores = errorNombre !== '' || errorEmail !== '' || errorTelefono !== '' || errorCantidadPizza !== '';
  
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
          pattern='[0-9]*'
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

        <button type='button' onClick={registrar} disabled={hayErrores}>Registrar</button>
      </div>
    </form>
  )
}
