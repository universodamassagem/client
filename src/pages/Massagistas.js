import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import HMassagistas from "../components/HomeComponents/HMassagistas"
import EntreEmContato from "../components/HomeComponents/EntreEmContato"
//import Localizacao from "../components/HomeComponents/Localizacao"

export default function Massagistas () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container" >
            <div id='TOP-MARGIN-TO-FIXED-HEADER' style={{display: 'none', width:'120px', height:'64px'}}></div>
            <WhatsApp />
            <ScrollTop/>
            <Header />
            <HMassagistas />
            {/*<Localizacao />*/}
            <EntreEmContato size='big' />
            <Footer />
        </div>
    );
}