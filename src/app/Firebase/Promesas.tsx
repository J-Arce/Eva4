import { Pedido } from "../Interfaces/IFormulario";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./FirebaseApp";


export const registrarPedido = async(p:Pedido)=>{
    
    
      const docRef = await addDoc(collection(db, "pedido"), p)

}

export const obtenerPedidos = async()=>{
    const querySnapshot = await getDocs(collection(db, "pedido"));
    console.log("CHAOOO")
    console.log(querySnapshot)
    var pedidos:Pedido[] = []
    querySnapshot.forEach((d)=>{
        console.log(d.id)
        console.log(d.data())
        var p:Pedido = {
            nombre:d.data().nombre,
            email:d.data().email,
            telefono:d.data().telefono,
            tipoPizza:d.data().tipoPizza,
            cantidadPizza:parseInt(d.data().cantidadPizza),
            codigoDescuento:d.data().codigoDescuento,
            tipoPago:d.data().tipoPago,
            horaEntrega:d.data().horaEntrega,
            idPedido:d.id
        } 
        pedidos.push(p)
    })
    return pedidos
}
export const obtenerPedido = async(idPedido:string)=>{
    const docRef = doc(db, "pedido", idPedido);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const p:Pedido = {
            nombre:docSnap.data().nombre,
            email:docSnap.data().email,
            telefono:docSnap.data().telefono,
            tipoPizza:docSnap.data().tipoPizza,
            cantidadPizza:docSnap.data().cantidadPizza,
            codigoDescuento:docSnap.data().codigoDescuento,
            tipoPago:docSnap.data().tipoPago,
            horaEntrega:docSnap.data().horaEntrega,
            idPedido:docSnap.id
        }
        return p
    } else {
    // docSnap.data() will be undefined in this case
        return undefined
    }
}
export const actualizarPedido = async(idPedido:string,p:Pedido)=>{
    const docRef = doc(db, "pedido", idPedido);

// Set the "capital" field of the city 'DC'
    await updateDoc(docRef, {...p});
}
export const eliminarPedido = async(idPedido:string)=>{
    await deleteDoc(doc(db, "pedido", idPedido));
}