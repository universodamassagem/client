import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { /*IoIosRose,*/ IoMdClose } from 'react-icons/io';
import { BsList } from 'react-icons/bs';

//TMP image:
import logotype from "../../assets/tmp_logo/logotype_test.png"

//import { home as txts } from '../../constants/txts'
import txts from '../../constants/translation/pt_br/header.json'

import "./style.css";

export default function Header (props) {

    const [ MNavB, setMNavB ] = useState(1);

    const history = useHistory()

    window.addEventListener('scroll', function() {
        let header = document.getElementById('Header');
        let nav = document.getElementById('nav');
        //let s = document.getElementById('searchButton');
        let h3 = document.getElementById('h3');

        if( window.pageYOffset > 40 ) {
            header.classList.add("sticky");   
            nav.className = 'nav_fix';
            //s.className = 's_fix';
            h3.style.color = '#752d2e'
        } else {
            header.classList.remove("sticky");
            nav.className = 'nav_top';
            //s.className = 's_top';
            h3.style.color = '#a3a49c'
        }
      });

      function handleHNavB () {
          let nav = document.getElementById('mobile_nav');
          setMNavB( MNavB ? 0 : 1 );

          //nav.style.display = MNavB ? 'flex' : 'none';
          nav.style.display = MNavB ? 'flex' : 'none';
      }

    return (
        <header id="Header" className=''>
            <div id='header_at_center'>
                <div className='header_mid'>
                <a href='/
                'className='put_divs_on_right'>
                    <div className='mid mid--logotipo'>
                        <div className='logotipo_column_left'>
                            <img src={logotype} />
                        </div>
                        <div className='logotipo_column_right'>
                            <h1>{txts.titulo}</h1>
                            <h3 id='h3'>{txts.subtitulo.toUpperCase()}</h3>
                        </div>
                    </div>
                </a>
                    <div className='put_divs_on_left'>
                        <div id='nav' className='nav_top'>
                            <ul>
                                <li><a href="/">{txts.nav[0].toUpperCase()}</a></li>
                                <li><a href="/Sobre">{txts.nav[1].toUpperCase()}</a></li>
                                <li><a href="/Massagem">{txts.nav[2].toUpperCase()}</a></li>
                                <li><a href="/Massagistas">{txts.nav[3].toUpperCase()}</a></li>
                                <li><a href="/Estetica">{txts.nav[4].toUpperCase()}</a></li>
                                <li><a href="/Contato">{txts.nav[5].toUpperCase()}</a></li>
                            </ul>
                        </div>
                        {/*
                        <div id='searchButton' className='s_top'>
                            <span><HiSearch /></span>
                        </div>
                        */}
                        {/* Mobile: */}
                        <div id='mobile_nav_button'><button onClick={handleHNavB}><span>{ MNavB ? <BsList /> : <IoMdClose />}</span></button></div>            
                        
                    </div>
                </div>
            </div>

            {/* Mobile: */}
            <div id='mobile_nav'>
                <ul>
                    <li onClick={() => history.push('/')}>HOME</li>
                    <li onClick={() => history.push('/Sobre')}>SOBRE</li>
                    <li onClick={() => history.push('/Massagem')}>MASSAGEM</li>
                    <li onClick={() => history.push('/Massagistas')}>MASSAGISTAS</li>
                    <li onClick={() => history.push('/Estetica')}>ESTÉTICA</li>
                    <li onClick={() => history.push('/Contato')}>CONTATO</li>
                </ul>
            </div>
        </header>
    );
}