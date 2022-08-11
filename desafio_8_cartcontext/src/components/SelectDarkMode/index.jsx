import React from 'react'
import { useContext } from 'react';
import { ShopData } from '../../context/Shop';

const SelectDarkMode = () => {
    const {setDarkMode} = useContext(ShopData);
    const handleDarkMode = (evento) => {
        console.log(evento);
        if (evento.target.value === "light") setDarkMode(false);
        else setDarkMode(true);
    } 
  return (
    <div className='select-container'>
        <label>Tema:</label>
        <select className='select-mode' onChange={handleDarkMode} defaultValue="light">
            <option value="dark">Negro</option>
            <option value="light">Gris</option>
        </select>
    </div>
  )
}

export default SelectDarkMode