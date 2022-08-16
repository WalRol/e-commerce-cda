import React from 'react';
import useCounter from '../customHooks/useCounter';
import styles from './Contador.module.css';


const Contador = ({stock, add}) => {
    const {count, aumentar, restar} = useCounter (stock)

    const agregar = () => {
      add(count)
     }
    return (
        <><div>
        <div className={ styles.box }  >
        <button className={styles.boton} onClick={aumentar}>+</button>
        <h1 >{count}</h1>
        <button className={styles.boton}  onClick={restar}>-</button>
        </div>
        <div>
        <button style={{margin: '10px'}} className={styles.boton} onClick={agregar} >Agregar</button>
        </div>
        </div>
        </>
    );
};

export default Contador;
