import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import SmallB from "../components/SmallBanner";
//import EntreEmContato from "../components/HomeComponents/EntreEmContato"

import Texto1 from '../components/Texts/Texto1'

import txts from '../constants/translation/pt_br/pages/massagem.json'

export default function Massagem () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container" >
            <div id='TOP-MARGIN-TO-FIXED-HEADER' style={{display: 'none', width:'120px', height:'64px'}}></div>
            <WhatsApp />
            <ScrollTop/>
            <Header />
            <SmallB 
                titulo="m"
                conteudo={txts.title.toUpperCase()}
            />
            <div className='wrap_all'>
            <div className='center_all'>

                    {/* OL: */}
                    <div className='column_all'>
                            <strong className='simple_titulo center' style={{margin:'30px 0 30px 0', fontSize:'2.3em', fontWeight: 300}}> Bem Estar</strong>
                    </div>

                    <div style={{display:'flex'}}>
                                <p className='simple_text' style={{fontSize: '1.2em'}}> 01. </p>
                                <p className='simple_text' style={{fontWeight: 900, marginLeft: '10px', fontSize: '1.2em'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>
                            <div style={{display:'flex'}}>
                                <p className='simple_text' style={{fontSize: '1.2em'}}> 02. </p>
                                <p className='simple_text' style={{fontWeight: 900, marginLeft: '10px', fontSize: '1.2em'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>
                            <div style={{display:'flex'}} >
                                <p className='simple_text' style={{fontSize: '1.2em'}}>03. </p>
                                <p className='simple_text' style={{fontWeight: 900, marginLeft: '10px', fontSize: '1.2em'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>
                            <div style={{display:'flex'}}>
                                <p className='simple_text' style={{fontSize: '1.2em'}}> 04. </p>
                                <p className='simple_text margin_b' style={{fontWeight: 900, marginLeft: '10px', fontSize: '1.2em'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>

                    {/* Bullet List: */}
                    <div className='column_all' style={{margin:'30px 0 10px 0'}}>
                        <div style={{width:'100%'}}>
                        <strong className='simple_titulo' style={{margin:'30px 0 30px 0', fontSize:'1.2em', fontWeight: 300}}> Bem Estar</strong>
                        </div>
                    </div>

                    <div style={{display:'flex'}}>
                                <p className='simple_text'> • </p>
                                <p className='simple_text' style={{fontWeight: 900, marginLeft: '10px'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>
                            <div style={{display:'flex'}}>
                                <p className='simple_text'> • </p>
                                <p className='simple_text' style={{fontWeight: 900, marginLeft: '10px'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>
                            <div style={{display:'flex'}}>
                                <p className='simple_text'> • </p>
                                <p className='simple_text' style={{fontWeight: 900, marginLeft: '10px'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>
                            <div style={{display:'flex'}}>
                                <p className='simple_text'> • </p>
                                <p className='simple_text margin_b' style={{fontWeight: 900, marginLeft: '10px'}}> cih dbacdcadhdk kahdka hdd hadhnvadnn ahahjau h nh nhdunhacih</p>
                            </div>

                            <Texto1 
                                conteudo={txts.text1.content}
                                titulo={txts.text1.title}
                            />
                </div>
            </div>
            {/*
            <EntreEmContato size='big' />
            */}
            <Footer />
        </div>
    );
}