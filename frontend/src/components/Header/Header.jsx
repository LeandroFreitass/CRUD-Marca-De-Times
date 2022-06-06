import React from "react";
import style from './Header.module.css'
import Navigation from "./Navigation/Navigation";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={style.header} >
            <div className={style.header__top}>
                <Link to='/'>TRIKASFUT</Link>
            </div>
            <div className={style.header__bottom} >
               
                <Navigation />
               
            </div>
        </header>
    )
}

export default Header