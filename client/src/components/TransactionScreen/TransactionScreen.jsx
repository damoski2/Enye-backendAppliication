import React from 'react';
import style from './TransactionScreen.module.css';
import astronaut from '../../Images/astronaut.svg';


const TransactionScreen = () => {
    return (
        <section className={style.container}>
            <p>Click on a Profile to view more details about the transaction.</p>
            <img src={astronaut} />
        </section>
    )
}

export default TransactionScreen
