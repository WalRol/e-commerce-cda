import React from 'react'
import Contador from '../Contador/Contador'
import style from './CardDetail.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const CardDetail = ({item}) => {
   const add = () => {
         const addCart = withReactContent(Swal)

        addCart.fire({
           title: <strong>Producto agregado</strong>,
           html: <i>El producto ya se encuentra en tu carrito</i>,
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
            <Contador stock={item.stock} add={add} />
        </div>
    </div>
  )
}

export default CardDetail