import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList';
//import {serviciosLista} from '../../mocks/servicios';
import './styles.css';

const ItemListContainer = ({greeting}) => {
  const [pokemonsOriginales, setPokemonsOriginales] = useState([])
  const [servicios, setServicios] = useState([])
  const {categoryId} = useParams();
  /*
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
  */
  useEffect(() => {

    //La petición debe estar en una función asíncrona
    const getServicios = async () => {
      try {

        if (pokemonsOriginales.length === 0){
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
          const data = await response.json();
          // console.log(data);
          // setPokemons(data.results);
          const auxiliar = []
          for (const servicios of data.results) {
            const response = await fetch(servicios.url);
            const detailPokemon = await response.json();
            // console.log(detailPokemon)
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
  return (
    <>
      <div>
          <h1>{greeting}</h1>
      </div>
      <ItemCount stock={8}/>
      <div className="card">
        <ItemList service={servicios}/>
      </div>
    </>  
  )
}

export default ItemListContainer