import React from 'react';
import { Routes,Route } from 'react-router-dom'
import CardContainer from '../Cards/CardContainer';
import Cart from './Cart';
import DetailContainer from './DetailContainer';

const Main = () => {

    return (
        <div >
            <Routes>
                <Route path="/" element={<CardContainer/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/detail/:id" element={<DetailContainer />} />
                <Route path="/category/:categoria" element={<CardContainer />} />
            </Routes>
        </div>
    );
};

export default Main;
