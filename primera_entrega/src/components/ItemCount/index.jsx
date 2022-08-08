import React, { useState } from 'react'
import '../ItemCount/styles.css';

const ItemCount = ({stock}) => {
    const [cantidad, setCantidad]=useState(1);
    const addCantidad = () => {
        if (cantidad < stock){
            setCantidad (cantidad + 1);
        }
    };
    const decreCantidad = () => {
        if (cantidad > 1){
            setCantidad (cantidad - 1);
        }
    };
    const handleAddCard = () => {
        alert(`Se agregaron ${cantidad} productos al carro`);
    };
  return (
    <div className='contenedorPrincipal'>
        <div className='primerContenedor'>
            <button className='suma' onClick={addCantidad}>+</button>
            <div className='cantidad'><span>{cantidad}</span></div>
            <button className='resta' onClick={decreCantidad}>-</button>
        </div>
        <button className='agregar' onClick={handleAddCard}>Agregar</button>
    </div>
  )
}

export default ItemCount