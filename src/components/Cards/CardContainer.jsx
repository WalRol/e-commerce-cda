import React, {useEffect, useState} from 'react'
import CardList from './CardList';
import {useParams} from 'react-router-dom'

const CardContainer = () => {
    const [items, setItems] = useState([])
    const {categoria} = useParams();
    console.log(categoria);
      useEffect(() => {
        if (categoria) {
          fetch(`https://fake-products-eric.herokuapp.com/api/products/category/${categoria}`)
            .then ( (res) => res.json())
            .then ((res) => setItems(res))
        } else{
           fetch('https://fake-products-eric.herokuapp.com/api/products')
             .then ( (res) => res.json())
             .then ((res) => setItems(res))
        }

      }, [categoria]);

  return (
    <div
       style={{
           display:'flex',
           justifyContent:'center',
           flexDirection: 'column',
           alignItems: 'center'
       }}
    >
        <h2>Articulos</h2>
        <CardList items={items} />
    </div>
  )
  
}

export default CardContainer