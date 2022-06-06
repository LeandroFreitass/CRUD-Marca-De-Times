import React from "react";
import style from './ListFooter.module.css'
import { Link } from 'react-router-dom';


const ListFooter = ({ contents, title }) => {
    return (
        <div className={style.listFooter}>
            <h1 className={style.listFooter__title}>{title}</h1>
            <ul>
                {contents.map(content => (
                    <li className={style.listFooter__item}>
                        <Link to={content.link}>
                            {content.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListFooter