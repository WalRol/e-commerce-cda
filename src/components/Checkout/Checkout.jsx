import React from 'react'
import { useParams } from 'react-router-dom'
import estilo from './Checkout.module.css'

const Checkout = () => {

  const {idCompra} = useParams()
  return (
    <div className={estilo.checkoutContainer} >
      <h3>Muchas gracias por tu compra!</h3> 
      <h4>Con el siguiente codigo podes seguir 
      tu envio: {idCompra}</h4>
    </div>
  )
}

export default Checkout