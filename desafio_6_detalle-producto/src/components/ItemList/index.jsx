import React from 'react'
import Item from '../Item'

const ItemList = ({service}) => {
  return (
    <div className="cardP">
        {service.map(servicios => {
            return <Item key={servicios.id} servicios={servicios}/>
        })}
    </div>
  )
} 

export default ItemList