import React from 'react'
import './styles.css';

const ItemDetail = ({ servicesDetail }) => {
    if (servicesDetail !== null) {
        return (
            /*
            <div> 
                <img src={servicesDetail.sprites.front_default} alt="portada-servicio" />
                <p>{servicesDetail.name}</p>
            </div>
            */
            <div className='contenedor'>
            <img src={servicesDetail.sprites.front_default} alt="portada-servicio" width='250px'/>
            <div className='texto'>
                <h3>{servicesDetail.name}</h3>
                <p>Tipo: {servicesDetail.types[0].type.name}</p>
                <p>Peso: {servicesDetail.weight}</p>
            </div>
        </div>
        )
    }
    return (
        <p>Loading...</p>
    )
}



export default ItemDetail;