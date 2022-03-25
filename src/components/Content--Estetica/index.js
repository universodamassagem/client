import React from "react";
import "./style.css";

import Texto1 from '../../components/Texts/Texto1'
import Texto2 from '../../components/Texts/Texto2'
import Texto1_BulletList from '../../components/Texts/Texto1_BulletList'

import sala_img from '../../assets/sala.jpg'
import limpeza_de_pele from '../../assets/limpeza-de-pele.png'

//Conteudo de texto:
import txts from '../../constants/translation/pt_br/content_estetica.json'

export default function Content_Estetica () {

    return (

        <div className='wrap_all'>
        <div className='center_all'>
            {/* Texto Titulo pequeno alinhado a esquerda: */}
            <Texto1 
                conteudo={txts[0].conteudo}
                titulo={txts[0].titulo}
            />
            <Texto1_BulletList 
                BLista={txts[0].bullet_list}
            />
            <Texto2 
                conteudo={txts[1].conteudo}
                titulo={txts[1].titulo}
            />

            <div className='Slideshow' style={{marginBottom: '30px'}}>


                 {/* FIX */}
                <img src={window.outerWidth > 960 ? sala_img : ''}></img>


            </div>

            <Texto1 
                conteudo={txts[2].conteudo}
                titulo={txts[2].titulo}
            />

            <div className='Slideshow' style={{ marginBottom:'30px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>

                 {/* FIX */}
                <img src={window.outerWidth > 960 ? limpeza_de_pele : ''}></img>
                <img src={window.outerWidth > 960 ? limpeza_de_pele : ''}></img>


            </div>
        </div>
    </div>

    );
}