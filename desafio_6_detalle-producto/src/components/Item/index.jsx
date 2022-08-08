import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Item = ({servicios}) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/item/${id}`)
  }
  
  return (
    <div  className="cardI">
        <img src={servicios.sprites.front_default} width="150px" alt='serv'/>
        <h2 onClick = {()=> handleNavigate(servicios.id)}>Servicio: {servicios.id}</h2>
        <p>Descripción: {servicios.name}</p>
        
    </div>
  )
}
//<p>Disponible: {servicios.stock}</p>
export default Item