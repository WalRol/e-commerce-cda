import React, { useContext } from 'react'
import { FavContext } from '../context/FavContext'
import { Link } from 'react-router-dom';
import Card from './Cards/Card';
const Favorites = () => {
    const {fav, item} = useContext(FavContext)

    if (fav.length === 0) {
        return (
          <div >
            <h1>
              Aún no tenés ningún producto como favorito,{' '}
              <Link to="/">Acá</Link> podes encontrar todos nuestros productos.
            </h1>
          </div>
        )
      }
      return (
        <>
    {
        fav.map((item)=>(
            <Card prod={item} key={item.id}/>
        ), )
    }
    </>
  )
}
export default Favorites 