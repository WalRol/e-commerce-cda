import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import estilo from './Form.module.css'
const URL = 'https://fake-products-eric.herokuapp.com/api/orders'
const Form = ({cart,total,handleId,deleteAll}) => {
    const [dataform, setDataform] = useState({user:'', phone:''})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const order = async() => {

       setLoading(true);
       
       const enviarForm = await fetch(URL,{
           method: 'POST',
           headers: {
            'Content-Type' : 'application/json'
           },
           body: JSON.stringify({
              cart,
              total,
              user: dataform.user,
              phone:dataform.phone
            })
       })

       const response = await enviarForm.json();
       
       setLoading(false);
       deleteAll();
       navigate(`/checkout/${response.id}`)
    };

    const handleSubmit = (e) => {
         e.preventDefault()
         order()
    }
    const handleChange = (e) => {
       setDataform ({
           ...dataform,
           [e.target.name]: e.target.value,
       });
    }
  return (
    <div>
    <form className={estilo.form} onSubmit={handleSubmit} >
        <input
         type="text" 
         name='user'
         placeholder='Ingresa tu nombre' 
         onChange={handleChange}
         value= {dataform.user}
        />
         <input
         type="text" 
         name='phone'
         placeholder='Ingresa tu telefono' 
         onChange={handleChange}
         value= {dataform.phone}
        />
       
        <button>{loading ? 'Enviando' : 'Enviar'}</button>
    </form>
    </div>
  )
};

export default Form