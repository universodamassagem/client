import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import SmallB from "../components/SmallBanner";
import EntreEmContato from "../components/HomeComponents/EntreEmContato"
import Content_Estetica from "../components/Content--Estetica";

import txts from '../constants/translation/pt_br/pages/estetica.json'

export default function Estetica () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);
    
    return (
        <div className="container" >
             <div id='TOP-MARGIN-TO-FIXED-HEADER' style={{display: 'none', width:'120px', height:'64px'}}></div>
            <WhatsApp />
            <ScrollTop/>
            <Header />
            <SmallB 
                titulo="e"
                conteudo={txts.title.toUpperCase()}
            />
            <Content_Estetica />
            <EntreEmContato size='big' />
            <Footer />
        </div>
    );
}

