import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import CartDetail from './CartDetail';
import estilo from './Cart.module.css'
import Form from '../Form/Form'

const Cart = () => {
  const { cart , deleteAll, deleteOne, totalPrice, disminuir, aumentar} = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className={estilo.cartContainer}>
        <h1>
          Aún no tenés ningún producto en el carrito,{' '}
          <Link to="/">Acá</Link> vas a poder encontrar todo lo que
          buscás
        </h1>
      </div>
    )
  }
  return (
    <>
    <div className={estilo.cartContainer}>
      {cart.map((prod)=>(
        <CartDetail
            key={prod.id}
            prod={prod}
            deleteOne={deleteOne}
            disminuir={disminuir}
            aumentar={aumentar}
        />
      ))}
      <div>
        <button className={estilo.vaciar} onClick={deleteAll} >
          Vaciar carrito
        </button>
        <h2>Total: ${totalPrice}</h2>
      </div>
      <Form cart={cart} total={totalPrice} deleteAll={deleteAll}/>
    </div>
     </>
  );
};

export default Cart