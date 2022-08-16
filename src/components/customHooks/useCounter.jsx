import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useCounter = (stock) => {
    const [count, setCount] = useState(1);
    
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
  return {count,aumentar,restar}
}

export default useCounter