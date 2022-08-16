import React from 'react'
import estilo from './CartDetail.module.css'
const CartDetail = ({prod, deleteOne, aumentar , disminuir}) => {
    
  return (
    <div className={estilo.containerCartDetail}>
        <div className={estilo.infoCartDetail} >
            <img src={prod.img} alt={prod.name} />
            <article>
                <h3>{prod.name}</h3>
                <div className={estilo.subtotal} >
                    <button
                     className={estilo.boton} 
                     onClick={() => disminuir(prod)} 
                     disabled= {prod.cantidad ===1}
                     >-</button>
                    <h4>{prod.cantidad}</h4>
                    <button 
                    className={estilo.boton}
                    onClick={() => aumentar(prod)}
                    >+</button>
                    <h4>* $ {prod.price} =</h4>
                    <h4>${prod.price * prod.cantidad}.-</h4>
                </div>
            </article>
            <button 
            className={estilo.botonDelete}
            onClick={() => deleteOne(prod.id)}
            
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default CartDetail