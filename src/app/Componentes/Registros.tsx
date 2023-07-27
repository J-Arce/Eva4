import React, { useEffect, useState } from 'react'
import { obtenerPedidos } from '../Firebase/Promesas'
import { Pedido } from '../Interfaces/IFormulario'
import { Link } from 'react-router-dom'



export const Registros = () => {
    const [pedidos, setPedidos] = useState<Pedido[]>([])
    useEffect(()=>{
        obtenerPedidos().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado)
            setPedidos(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = pedidos.map((p)=>{
            return <tr>
                    <td>{p.nombre}</td>
                    <td>{p.email}</td>
                    <td>{p.telefono}</td>
                    <td>{p.tipoPizza}</td>
                    <td>{p.cantidadPizza}</td>
                    <td>{p.codigoDescuento}</td>
                    <td>{p.tipoPago}</td>
                    <td>{p.horaEntrega}</td>
                    <td><Link to={"/actualizar/"+p.idPedido}>Actualizar</Link></td>
                    <td><Link to={"/eliminar/"+p.idPedido}>Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Pizza</th>
            <th>Cantidad</th>
            <th>Cod Descuento</th>
            <th>Tipo de pago</th>
            <th>Hora de Entrega</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
