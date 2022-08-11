import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [servicesDetail, setServicesDetail] = useState(null);
    const {itemId} = useParams();
    useEffect(() => { 
        const getServiceDetail = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${itemId}`)
                const data = await response.json();
                console.log(data);
                setServicesDetail(data);
            } catch (error) {
                alert(`Hubo un error: ${error.message}`)
            }
        }
        getServiceDetail();

    }, [itemId])

    return (
        <ItemDetail servicesDetail={servicesDetail}/>
    )
}

export default ItemDetailContainer