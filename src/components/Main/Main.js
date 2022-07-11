import React from 'react';
import styles from './Main.module.css';

const Main = ({ saludo }) => {
    //console.log(props);
    //console.log(props.saludo);
    //const saludo = props.saludo;
    //const { saludo } = props;

    return (
        <div className={styles.main}>
            <h2>Main</h2>
            <p>{saludo}</p>
        </div>
    );
};

export default Main;
