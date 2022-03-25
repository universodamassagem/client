import React from "react";
import "./style.css";

import Formulario from '../../Formulario'

export default function HForm () {

    return (
        <div id="HForm">
            <div className='hform_wrapper'>
                <Formulario indentificador='Home'/>
            </div>
        </div>
    );
}