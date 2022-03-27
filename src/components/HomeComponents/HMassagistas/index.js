import React from "react";
import "./style.css";

// import Localizacao from '../Localizacao'

// Components:
import RedButton from "../../RedButton";

//TMP imagens:
import i3 from "../../../assets/tmp_mon/i3.jpg"

//import imagem from '../../../assets/mass_test.png'

import txts from '../../../constants/translation/pt_br/home_components/h_massagistas.json'

export default function Massagistas () {
    return (
        <div id="Massagistas">
            <div className="mass_container">
                <div className="mass_center">
                    <div className='mass_center_titulo'>
                        <h1>{txts.title}</h1>
                        <strong>{txts.msg}</strong>
                    </div>
                    <div className={`massagistas_wrapper massagistas_wrapper--${txts.massagistas.length > 1 ? 'grid' : 'flex'}`}>
                        {txts.massagistas.map((it, idx) => (
                            <div className={`massagista massagista--${idx+1}`}>
                                <div className="massagista_img">
                                    <img src={i3}/>
                                    <ImgHover 
                                        name={it.name}
                                        city={it.city}
                                    />
                                </div> 
                                <div className="massagista_nome">
                                    <h2>{it.name}</h2>
                                    <p>{it.city}</p>
                                </div>                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const ImgHover = ({city, name}) => {
    return (
        <div id="img_hover">
            <h2>{name}</h2>
            <p>{city}</p>
            <a href="/perfil">
                <RedButton size='small'>
                    Ver Perfil
                </RedButton>
            </a>
        </div>
    )
}
