import React from "react";
import "./style.css";
import { HiLocationMarker } from "react-icons/hi"

import txts from '../../../constants/translation/pt_br/home_components/localizacao.json'

export default function Localizacao () {

    return (
        <div id="Localizacao">
            <div className="local_center">
                <a target="_black" href={txts.map}>
                <span id="local_icon"><HiLocationMarker /></span>
                <div className="local_nome">
                    <h1>{txts.local}</h1>
                </div>
                </a>
            </div>
        </div>
    );
}