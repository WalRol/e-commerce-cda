import React from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart.svg';
import {Link, NavLink} from 'react-router-dom'

const Nav = ({ isInHedaer }) => {
    return (
        <nav className={isInHedaer ? s.nav : s.navFooter}>
            <Link to='/'>
            <h2>CDA</h2>
            </Link>
            <ul>
                <NavLink
                  to={isInHedaer ? '/category/remeras' : 'https://www.instagram.com'}
                  >
                   {isInHedaer ? 'Remeras' : 'Instagram'}
                </NavLink>
                {/* <Link to='/remeras'>{isInHedaer ? 'Remeras' : 'Instagram'}</Link> */}
                <NavLink
                  to={isInHedaer ? '/category/camisas' : 'https://www.facebook.com'}
                  >
                   {isInHedaer ? 'Camisas' : 'Facebook'}
                </NavLink>
                {/* <Link to="/category/camisas" >{isInHedaer ? 'Camisas' : 'Facebok'}</Link> */}
                <NavLink
                  to={isInHedaer ? '/category/gorras' : 'https://www.linkedin.com'}
                  >
                   {isInHedaer ? 'Gorras' : 'Linkedin'}
                </NavLink>
                {/* <Link to='/category/gorras'>{isInHedaer ? 'Gorras' : 'Linkedin'}</Link> */}
            </ul>
            <Link to='/category/cart'>
            <img src={isInHedaer ? carrito : 'logo192.png'} alt="logo" />
            </Link>
            
        </nav>
    );
};

export default Nav;
