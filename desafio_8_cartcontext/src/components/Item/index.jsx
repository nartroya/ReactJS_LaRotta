import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useContext } from 'react';
import { ShopData } from '../../context/Shop';

const Item = ({servicios}) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/item/${id}`)
  }
  const {darkMode} = useContext(ShopData);
  return (
    <div  className="cardI" style={{backgroundColor: darkMode ? '#333': 'grey'}}>
        <img src={servicios.sprites.front_default} width="150px" alt='serv'/>
        <h2 onClick = {()=> handleNavigate(servicios.id)}>Servicio: {servicios.id}</h2>
        <p>Descripción: {servicios.name}</p>
        
    </div>
  )
}
//<p>Disponible: {servicios.stock}</p>
export default Item