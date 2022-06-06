import React from "react";
import style from './Principal.module.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'



const Principal = () => {
    return (
        <div className={style.principal}>
            <h1><a href="https://www.futfanatics.com.br/">TRIKASFUT</a></h1>
            <div className={style.principal__icons}>
                <a href='https://www.facebook.com/futfanatics'><FaFacebookF /></a>
                <a href='https://twitter.com/futfanatics'><FaTwitter /></a>
                <a href='https://www.instagram.com/futfanatics/'><AiFillInstagram /></a>
            </div>
            <h3>Copyright  2022 | Todos direitos reservados</h3>
        </div>
    )
}

export default Principal