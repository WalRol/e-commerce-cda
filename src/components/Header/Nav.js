import React from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart.svg';

const Nav = ({ isInHedaer }) => {
    return (
        <nav className={isInHedaer ? s.nav : s.navFooter}>
            <h2>CDA</h2>
            <ul>
                <li>{isInHedaer ? 'Remeras' : 'Instagram'}</li>
                <li>{isInHedaer ? 'Camisas' : 'Facebok'}</li>
                <li>{isInHedaer ? 'Gorras' : 'Linkedin'}</li>
            </ul>

            {/* <img src={logo} alt="logo" /> */}
            {/* {isInHedaer ? <img src="logo192.png" /> : <img src={carrito} />} */}
            <img src={isInHedaer ? carrito : 'logo192.png'} alt="logo" />
            {/* <img src='adress desde la web' alt="logo" /> */}
        </nav>
    );
};

export default Nav;
