import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <h2>CDA</h2>
            <ul>
                <li>Remeras</li>
                <li>Camisas</li>
                <li>Gorras</li>
            </ul>

            {/* <img src={logo} alt="logo" /> */}
            <img src="logo192.png" alt="logo" />
            {/* <img src='adress desde la web' alt="logo" /> */}
        </nav>
    );
};

export default Nav;
