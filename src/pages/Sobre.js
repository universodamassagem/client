import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import EntreEmContato from "../components/HomeComponents/EntreEmContato"
import HalfSingle from "../components/HalfSingle";
import sala_img from '../assets/sala.jpg'

import './styles.css';

export default function Sobre () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container">
            <WhatsApp />
            <ScrollTop/>
            <Header />
            <div className='wrap_all'>
                <div className='center_all'>
                    <div className='column_all column_all--padding'>
                    <p  className='simple_text simple_text--bigger margin_b'> Bem vindo a Equilibrio Massagens </p>
                    <strong className='simple_titulo simple_titulo--3em margin_b'> Bem Estar Em Sua Rotina</strong>
                    <p className='simple_text center margin_b'> dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih</p>
                    </div>
                </div>
                <div className='wrap_it wrap_it--background'>
                    <div className='center_all'> 
                        <div className='column_all'>
                            <strong className='simple_titulo center margin_b'> Bem Estar</strong>
                            <p className='simple_text center margin_b'> dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih</p>
                        </div>

                        <div className='column_all column_all--txtB' style={{borderTop:'1px solid #00000020'}}>
                            <strong id='txtB'> Instalação </strong>
                            <div className='Slideshow' style={{marginBottom:'30px'}}>


                                {/* FIX */}
                                <img src={window.outerWidth > 960 ? sala_img : ''}></img>



                            </div>
                            <p className='simple_text center margin_b'> Tranquilidade e CHARME ... Energia positiva PURA.
Para quem procura, para quem encontra, para quem redescobre.
Para parar, retomar, regenerar, refazer e reparar.
As salas acolhedoras e autónomas de boa dimensão, com duches, Ar Condicionado, Ventilação Central, plataformas em mármore aquecido no inverno...
O nosso espaço está localizado na zona nobre do Parque das Nações Sul;
Acesso exclusivo para os nossos clientes;
Instalações acessíveis pelo exterior;
Disponível o serviços de lavandaria;
Com Ar condicionado;
Com Ventilação Central;
Duches individuais em cada sala;
Kit com duas toalhas, shampoo, gel, luva descartável para limpar o corpo, pente descartável, sapatos azuis de proteção, capas descartáveis para marquesas e apoios de cabeça, chinelos...
</p>
                        </div>
                    </div>
                </div>
            </div>
            <HalfSingle />
            <EntreEmContato size='big' />
            <Footer />
        </div>
    );
}