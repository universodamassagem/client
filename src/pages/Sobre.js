import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import EntreEmContato from "../components/HomeComponents/EntreEmContato"
import HalfSingle from "../components/HalfSingle";
//import sala_img from '../assets/sala.jpg'
import txts from '../constants/translation/pt_br/pages_/sobre.json'
import Paragraph from "../components/Paragraph";

import './styles.css';

export default function Sobre() {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container">
            <WhatsApp />
            <ScrollTop />
            <Header />
            <div className='wrap_all'>
                <div className='center_all'>
                    <div className='column_all column_all--padding'>
                        <p className='simple_text simple_text--bigger margin_b'>{txts[0].title}</p>
                        <strong className='simple_titulo simple_titulo--3em margin_b'>{txts[0].subtitile}</strong>
                        <p className='simple_text center margin_b'>
                            <Paragraph
                                text={txts[0].description}
                            />
                        </p>
                    </div>
                </div>
                <div className='wrap_it wrap_it--background'>
                    <div className='center_all'>
                        <div className='column_all'>
                            <strong className='simple_titulo center margin_b'>{txts[1].title}</strong>
                            <p className='simple_text center margin_b'>
                                {txts[1].description}
                            </p>
                        </div>

                        {/*<div className='column_all column_all--txtB' style={{ borderTop: '1px solid #00000020' }}>
                            <strong id='txtB'> Instalação </strong>
                            <div className='Slideshow' style={{ marginBottom: '30px' }}>



                                <img src={window.outerWidth > 960 ? sala_img : ''}></img>



                            </div>
                            <p className='simple_text center margin_b'> text here!</p>
                        </div>*/}
                    </div>
                </div>
            </div>
            <HalfSingle
                title={txts[2].title}
                content={txts[2].description}
                hideButton
            />
            <EntreEmContato size='big' />
            <Footer />
        </div>
    );
}