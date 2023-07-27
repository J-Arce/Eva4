export interface Pedido{
    nombre:string, // text
    email:string,  // email
    telefono:string,  // tel
    tipoPizza:string,  // select
    cantidadPizza:number, // number
    codigoDescuento:string,  // password
    tipoPago:string,  // radio
    horaEntrega:string  // time
    idPedido?:string
}