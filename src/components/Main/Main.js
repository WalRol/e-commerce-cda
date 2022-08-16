import React from 'react';
import { Routes,Route } from 'react-router-dom'
import CardContainer from '../Cards/CardContainer';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Favorites from '../Favorites';
import DetailContainer from './DetailContainer';

const Main = () => {

    return (
        <div >
            <Routes>
                <Route path="/" element={<CardContainer/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/favorites" element={<Favorites/>} />
                <Route path="/detail/:id" element={<DetailContainer />} />
                <Route path="/category/:categoria" element={<CardContainer />} />
                <Route path="/checkout/:idCompra" element={<Checkout/>} />
            </Routes>
        </div>
    );
};

export default Main;
