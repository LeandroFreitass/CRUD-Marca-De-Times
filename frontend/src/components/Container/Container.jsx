import React from "react";
import style from './Container.module.css'

const Container = (props) => {
    return (
        <main className={style.container}>
            {props.children}
        </main>
    )
}

export default Container