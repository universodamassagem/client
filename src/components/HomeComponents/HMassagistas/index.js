import React from "react";
import "./style.css";

// import Localizacao from '../Localizacao'

// Components:
import RedButton from "../../RedButton";

//TMP imagens:
import i1 from "../../../assets/tmp_mon/i1.jpg"
import a_plus from "../../../assets/a_plus.png"

//import imagem from '../../../assets/mass_test.png'

import txts from '../../../constants/translation/pt_br/home_components/h_massagistas.json'
import send from "../../../functions/send-whatsapp";

export default function Massagistas() {
    return (
        <div id="Massagistas">
            <div className="mass_container">
                <div className="mass_center">
                    <div className='mass_center_titulo'>
                        <h1>{txts.title}</h1>
                        <strong>{txts.msg}</strong>
                    </div>
                    <div className={`massagistas_wrapper massagistas_wrapper--${txts.massagistas.length > 1 ? 'grid' : 'flex'}`}>
                        {
                            txts.massagistas.map((it, idx) => {
                                return it.id === 'a_plus'

                                    ? <div
                                        className={`massagista massagista--${idx + 1}`}
                                        style={{ filter: 'drop-shadow(2mm 2mm 2mm #c76f7180)' }}
                                        onClick={() => send('Olá, gostaria de criar meu anúncio.')}
                                    >
                                        <div className="massagista_img">
                                            <img src={a_plus} />
                                            <ImgHover2
                                                name={' '}
                                                city={'Crie seu anúncio'}
                                                buttonTxt={'Anunciar'}
                                            />
                                        </div>
                                        <div className="massagista_nome">
                                            <h2>{' '}</h2>
                                            <p>{' '}</p>
                                        </div>
                                    </div>

                                    : <div className={`massagista massagista--${idx + 1}`} >
                                        <div className="massagista_img">
                                            <img src={i1} />
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

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

const ImgHover = ({ city, name }) => {
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

const ImgHover2 = ({ city, name, buttonTxt }) => {
    return (
        <div id="img_hover">
            <h2>{name}</h2>
            <p>{city}</p>
            <div>
                <RedButton size='small'>
                    {buttonTxt}
                </RedButton>
            </div>
        </div>
    )
}