import React from "react";
import "./style.css";

export default function SmallBanner (props) {

    return (
        <div className={`SmallBanner SmallBanner--${props.titulo}`}>
            <div className='smallb_absolute'></div>
            <h1>{props.conteudo}</h1>
        </div>
    );
}