import React, { useContext }from 'react'
import Contador from '../Contador/Contador'
import style from './CardDetail.module.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { isIn } from '../Utils/utils';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const CardDetail = ({item}) => {
  const {addToCart, cart} = useContext(CartContext);

  const isInCartDetail = isIn(cart, item.id);
  const productoAgregado = withReactContent(Swal)
  const add = (cantidad) => {
         addToCart(item,cantidad)
         productoAgregado.fire({
          title: <strong>El producto fue agregado con exito</strong>,
          html: <i>Accede al carrito para finalizar tu compra</i>,
          icon: 'success'
         })
       
     };
     
  return (
    <div className={style.detail} >
        <img src={item.img} alt={item.name} />
        <div className={style.info} >
            <h2>{item.name}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, illo sit, dolorum magnam cum, officia animi molestias expedita debitis amet et placeat cupiditate maxime. Non, deleniti? Aliquid eveniet voluptatem eaque.</p>
            <h4>{item.categoria}</h4>
            <h3>${item.price}</h3>
            {isInCartDetail ? (
            <h4>
              Ya está en el <Link to="/cart">carrito</Link>
            </h4> )
            : (
              <Contador stock={item.stock} add={add} />
            )}
         </div>
    </div>
  )
}

export default CardDetail