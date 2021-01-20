import React from 'react';
import style from './Heading.module.css';

const Heading = () => {
    return (
        <section className={style.container}>
            <h1>Profile Records</h1>
            <p>Here's the list of users under this category.<br/> We have only 20 profiles</p>
        </section>
    )
}

export default Heading
