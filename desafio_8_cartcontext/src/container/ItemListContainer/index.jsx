import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import Modal from '../../components/Modal';
import './styles.css';

const ItemListContainer = ({greeting}) => {
  const [pokemonsOriginales, setPokemonsOriginales] = useState([])
  const [servicios, setServicios] = useState([])
  const {categoryId} = useParams();
  const [modalVisible, setModalVisible] = useState(false)
   useEffect(() => {
    const getServicios = async () => {
      try {

        if (pokemonsOriginales.length === 0){
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
          const data = await response.json();
          const auxiliar = []
          for (const servicios of data.results) {
            const response = await fetch(servicios.url);
            const detailPokemon = await response.json();
            auxiliar.push(detailPokemon);
          }
          setPokemonsOriginales(auxiliar)

        } else {
          let pokemonsFiltrados = [...pokemonsOriginales]
          if(categoryId) {
            pokemonsFiltrados = pokemonsOriginales.filter(servicios => servicios.types[0].type.name === categoryId)
          }
          setServicios(pokemonsFiltrados)
        }

      } catch (error) {
        alert(`Hubo un error: ${error.message}`)
      }
    }
    getServicios();
  }, [categoryId, pokemonsOriginales])
  const handleModal = () => {
    setModalVisible(false);
  }
  return (
    <>
      <div className="card">
        <ItemList service={servicios}/>
        <button onClick={handleModal}>Show modal</button>
        {modalVisible && <Modal handleClose={()=> setModalVisible(false)}/>}
      </div>
    </>  
  )
}

export default ItemListContainer