import React from 'react'
import Item from '../Item'
import './styles.css';

const ItemList = ({service}) => {
  return (
    <div className="cardP">
        {service.map(servicios => {
            return <Item key={servicios.name} servicios={servicios}/>
        })}
    </div>
  )
} 

export default ItemList