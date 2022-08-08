import React from 'react'

const Item = ({servicios}) => {
  return (
    <div className="cardI">
        <h2>Servicio: {servicios.name}</h2>
        <p>Descripción: {servicios.description}</p>
        <p>Disponible: {servicios.stock}</p>
    </div>
  )
}

export default Item