import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { FavContext } from '../../context/FavContext';
import estilo from './Card.module.css';
import { isIn } from '../Utils/utils';
const Card = ({prod}) => {
  const { addToFav, fav } = useContext(FavContext);

  const isInFav = isIn(fav, prod.id);
  return (
    <div className={estilo.card} >
      <img src= {prod.img} alt={prod.name} />
      <div className={estilo.info}> 
        <h3>{prod.name}</h3>
        <h4>${prod.price}</h4>
        <Link className= {estilo.detalle} to= {`/detail/${prod.id}`} >
          Ver detalle</Link>
          <button 
           className={isInFav ? estilo.favButton : estilo.favButtonQuit}
           onClick= {() => addToFav(prod)}
          >
             {isInFav ? 'Quitar de fav' : 'Agregar a fav'}
          </button>
    </div>
   </div>
  )
}

export default Card