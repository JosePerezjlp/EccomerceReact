import React,{ useState } from "react"
import './itemcount.css'
const ItemCount = () =>{
    const [stock, setStock] = useState(0);
    const agregarProducto = ()=>{
        setStock(stock + 1)
        
        if(stock == 10) return (setStock(stock))

    };
    const restarProducto = ()=>{
        setStock(stock - 1)
        if(stock == 0) return (setStock(stock))
    };
    
    return(
        <div className="contador">
            <p>{stock}</p>
            <button onClick={agregarProducto}>Agregar</button>
            <button onClick={restarProducto}>Quitar</button>
        </div>
    )
}


export default ItemCount
