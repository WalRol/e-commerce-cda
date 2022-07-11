import React from 'react';

const Nav = () => {
    const isHeader = true;
    return (
        <nav>
            <h2 /* style={{ backgroundColor: 'red' }} */>CDA</h2>
            <ul className={isHeader ? '' : ''}>
                <li>{isHeader ? 'Remeras' : 'Instagram'}</li>
                <li>Camisas</li>
                <li style={{ color: isHeader ? 'red' : 'green' }}>Gorras</li>
            </ul>

            {/* <img src={logo} alt="logo" /> */}
            <img src="logo192.png" alt="logo" />
            {/* <img src='adress desde la web' alt="logo" /> */}
        </nav>
    );
};

export default Nav;
