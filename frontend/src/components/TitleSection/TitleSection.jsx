import React from "react";
import style from './TitleSection.module.css'


const TitleSection = ({title, sub}) => {
    return(
        <div className={style.titleSection}>
            <h1>{title}</h1>
            <h2>{sub}</h2>
        </div>
    )
}

export default TitleSection
