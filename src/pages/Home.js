import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import HMassagistas from "../components/HomeComponents/HMassagistas"
import Localizacao from "../components/HomeComponents/Localizacao"
import SobreAMassagem from "../components/HomeComponents/SobreAMassagem"
import HForm from "../components/HomeComponents/HForm"
import Banner from "../components/HomeComponents/Banner"
import EntreEmContato from "../components/HomeComponents/EntreEmContato"
import Half from "../components/HomeComponents/Half"

import './styles.css';
import Aplus from "../components/Aplus";


export default function Home () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container" >
            <div id='TOP-MARGIN-TO-FIXED-HEADER' style={{display: 'none', width:'120px', height:'64px'}}></div>
            <Header isHome={1}/>
            <WhatsApp />
            <ScrollTop/>
            <Banner /> 
            <SobreAMassagem />
            <HMassagistas />
           {/* <Localizacao />*/}
            <EntreEmContato size='small'/>
            <Half side='left'/>
            <Half side='right'/>
            <HForm />
            <Aplus />
            <Footer />
        </div>
    );
}