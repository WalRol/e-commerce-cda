//import React from 'react'
//import './Header.css';
import style from './Header.module.css';
import Nav from './Nav';

/* const styles = {
    navbar: {
        color: 'white',
    },
}; */

const Header = () => {
    return (
        <header className={style.header}>
            <Nav />
        </header>
    );
};

export default Header;
