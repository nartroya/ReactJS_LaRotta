import React, { useState }  from 'react'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList';
import {serviciosLista} from '../../mocks/servicios';
import './styles.css';

const ItemListContainer = ({greeting}) => {

  const [servicios, setServicios] = useState([])
  
  const invocarServicios = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(serviciosLista)
    }, 2000)
  })
 
  invocarServicios
  .then(result => {
    setServicios(result)
  })
  .catch(error => {
    alert(`Log de error: ${error}`)
  })
  //console.log(servicios);
  return (
    <>
      <div>
          <h1>{greeting}</h1>
      </div>
      <ItemCount stock={5}/>
      <div className="card">
        <ItemList service={servicios}/>
      </div>
    </>  
  )
}

export default ItemListContainer