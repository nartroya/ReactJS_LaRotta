import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

export default function NavBar() {
    return (
        <ul>
            <li><a class="active" href="#home">Inicio</a></li>
            <li><a href="#news">Infraestructura</a></li>
            <li><a href="#contact">Plataforma</a></li>
            <li><a href="#about">Soporte</a></li>
            <CartWidget/>
        </ul>
    )
} 