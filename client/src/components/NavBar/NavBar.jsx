import React,{useEffect, useState} from 'react';
import style from './NavBar.module.css';
import SearchIcon from '../../Images/searchIcon.svg';

const NavBar = () => {
    const [inputs,setInputs]= useState('');

    return (
        <section className={style.container}>
            <h1 className={style.heading}>E-Records</h1>
            <div className={style.search}>
                <input type="text" placeholder="Search" />
                <input type="submit" value="Find Profile" />
            </div>
        </section>
    )
}

export default NavBar;
