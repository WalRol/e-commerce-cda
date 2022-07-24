import React from 'react';
import {Link} from 'react-router-dom';
import estilo from './Card.module.css';
const Card = ({prod}) => {
  return (
    <div className={estilo.card} >
      <img src= {prod.img} alt={prod.name} />
      <div className={estilo.info}> 
        <h3>{prod.name}</h3>
        <h4>${prod.price}</h4>
        <Link to= {`/detail/${prod.id}`} >Ver detalle</Link>
    </div>
   </div>
  )
}

export default Card