import React from 'react'
import CardList from './CardList';
import {useParams} from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";
import useFetch from '../customHooks/useFetch';
import Search from '../Main/Search';
import { useState } from 'react';

const CardContainer = () => {
  const [query, setQuery] = useState('')
  const {categoria} = useParams();

  const endpoint = categoria ? `category/${categoria}` : '';
    // eslint-disable-next-line
  const {data, loading, error} = useFetch(endpoint)

  const handleQuery = (params) => {
      setQuery(params);
    };

  return (
    <div
       style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '85vh',
        margin: '30px',
       }}
    >
      {data && (
          <>
          {loading ? (
                <h1><BeatLoader/></h1>
            ) : (
                <>
                    {categoria ? (
                        <h2>
                            Conocé nuestras {categoria.toLocaleLowerCase()}
                        </h2>
                    ) : (
                        <>
                        <h2>Ecommerce CDA</h2>
                        <Search handleQuery={handleQuery} />
                        </>
                    )}
                    

                    <CardList
                    query={query} 
                    items={data}
                    categoria={categoria} />
                </>
            )}
          </>

      )}
       
        
    </div>
  )
  
}

export default CardContainer

