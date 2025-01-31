import React from "react";
import "./style.css";

import Texto1 from '../../components/Texts/Texto1'
import Texto2 from '../../components/Texts/Texto2'
import TextBullet from '../../components/Texts/TextBullet'

//import sala_img from '../../assets/sala.jpg'
//import limpeza_de_pele from '../../assets/limpeza-de-pele.png'

//Conteudo de texto:
import txts from '../../constants/translation/pt_br/content_estetica.json'

export default function Content_Estetica() {

    return (

        <div className='wrap_all'>
            <div className='center_all'>
                {/* Texto Titulo pequeno alinhado a esquerda: */}

                <Texto2
                    conteudo={txts[2].conteudo}
                    titulo={txts[2].titulo}
                />

                <Texto1
                    conteudo={txts[0].conteudo}
                    titulo={txts[0].titulo}
                />
                <TextBullet
                    BLista={txts[0].bullet_list}
                />

                {/*<div className='Slideshow' style={{marginBottom: '30px'}}>
                <img src={window.outerWidth > 960 ? sala_img : ''}></img>
            </div>*/}
                {/*
                <Texto1
                    conteudo={txts[1].conteudo}
                    titulo={txts[1].titulo}
                />
               
                <Texto1
                    conteudo={txts[1].t}
                    titulo={' '}
                />*/}

                {/*<div className='Slideshow' style={{ marginBottom:'30px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <img src={window.outerWidth > 960 ? limpeza_de_pele : ''}></img>
                <img src={window.outerWidth > 960 ? limpeza_de_pele : ''}></img>
        </div>*/}
            </div>
            <div style={{ height: '80px' }} />
        </div>

    );
}