import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './Contador.module.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contador = ({stock, add}) => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate()
    
    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
          } else {
            const sinStock = withReactContent(Swal)

        sinStock.fire({
          title: <strong>No hay suficiente stock</strong>,
          html: <i>Por favor selecciona una cantidad inferior</i>,
          icon: 'error'
        })
            
          }
        
    };
    
    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
          } else {
            const minimo = withReactContent(Swal)

            minimo.fire({
              title: <strong>Upsss</strong>,
              html: <i>Por favor selecciona 1 o mas</i>,
              icon: 'info'
            })
          }
    };
    const reset = () => {
      setCount(1);
      navigate('/cart')
    }

    return (
        <>
        <div className={ styles.box }  >
        <button className={styles.boton} onClick={aumentar}>+</button>
        <h1 >{count}</h1>
        <button className={styles.boton}  onClick={restar}>-</button>
        <button className={ styles.box } id={styles.agregar} onClick={add} >Agregar</button>
          <div>
            <button onClick={reset} >Reset</button>
          </div>
        </div>
        </>
    );
};

export default Contador;
