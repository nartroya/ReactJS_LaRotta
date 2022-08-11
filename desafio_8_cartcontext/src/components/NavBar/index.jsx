import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopData } from '../../context/Shop';
import CartWidget from '../CartWidget';
import SelectDarkMode from '../SelectDarkMode';
import './styles.css';

export default function NavBar() {
    const {darkMode} = useContext(ShopData);
    console.log(darkMode); 
    return (
        <ul style={{backgroundColor: darkMode ? '#333': 'grey'}}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/category/grass">Tipo: Hierba</Link></li>
            <li><Link to="/category/fire">Tipo: Fuego</Link></li>
            <li><Link to="/category/water">Tipo: Agua</Link></li>
            <li><a href="#news">Infraestructura</a></li>
            <li><a href="#contact">Plataforma</a></li>
            <li><a href="#about">Soporte</a></li>
            <CartWidget />
            <SelectDarkMode/>
        </ul>
    )
} 