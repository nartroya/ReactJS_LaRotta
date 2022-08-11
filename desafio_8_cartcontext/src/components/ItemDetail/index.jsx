import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import { ShopData } from '../../context/Shop';
import './styles.css';

const ItemDetail = ({ servicesDetail }) => {
    const {addItem} = useContext(ShopData);
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate()

    const onAddCart = (quantity) => {
        alert(`Se agregó un total de servicios de: ${quantity}`)
        setQuantity(quantity)
        addItem(servicesDetail, quantity)
    }

    const onConfirm = () => {
        navigate('/cart')
    }

    if (servicesDetail !== null) {
        return (
            <div className='contenedor'>
            <img src={servicesDetail.sprites.front_default} alt="portada-servicio" width='250px'/>
            <div className='texto'>
                <h3>{servicesDetail.name}</h3>
                <p>Tipo: {servicesDetail.types[0].type.name}</p>
                <p>Peso: {servicesDetail.weight}</p>
                {quantity === 0 ?
                        <ItemCount stock={8} handleAddCart={onAddCart} />
                        :
                        <button onClick={onConfirm}>Finalizar Compra</button>
                    }
            </div>
        </div>
        )
    }
    return (
        <p>Loading...</p>
    )
}



export default ItemDetail;