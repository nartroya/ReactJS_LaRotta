import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.css';

export default function NavBar() {
    return (
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/category/grass">Tipo: Hierba</Link></li>
            <li><Link to="/category/fire">Tipo: Fuego</Link></li>
            <li><Link to="/category/water">Tipo: Agua</Link></li>
            <li><a href="#news">Infraestructura</a></li>
            <li><a href="#contact">Plataforma</a></li>
            <li><a href="#about">Soporte</a></li>
            <CartWidget />
        </ul>
    )
} 