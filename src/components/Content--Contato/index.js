import React from "react";
import "./style.css";

import { AiOutlineClockCircle, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from "react-icons/hi"
//Conteudo de texto:
import txts from '../../constants/translation/pt_br/content_contato'

import Formulario from "../Formulario";

export default function ContatoContent () {

    return (
        <div id="ContatoContent" style={{...sty}}>
             <div id='contato-wrapper' style={{width:'80%',  ...sty, flexDirection:'column'}}>
                
                <div style={{width:'100%',  ...sty, flexDirection:'column'}}>
                    <p style={{color: 'rgb(196, 196, 196)', fontSize: '1.2em', margin: '90px 0 30px 0'}}>{txts.horario}</p>
                    <strong className='simple_titulo' style={{margin:'30px 0 60px 0', fontSize:'2.2em', fontWeight: 100}}>{txts.msg}</strong>
                </div>

                <div id='wrap-contato-formulario' style={{width:'100%',  ...sty}}>
                    <div id='c-contato' style={{width:'40%', ...sty, flexDirection:'column'}}>
                        <strong style={{width:'100%', margin: '20px 0 20px 0', color:'#c45455', fontSize:'1.4em'}}> Contatos </strong>
                        {/*<span className='simple_text' style={{width:'100%', ...sty, justifyContent: 'flex-start', margin: '10px 0 10px 0'}}><HiOutlineLocationMarker /><p style={{marginLeft:'20px'}}>Curitiba</p></span>*/}
                        {/*<span className='simple_text' style={{width:'100%', ...sty, justifyContent: 'flex-start', margin: '10px 0 10px 0'}}><AiOutlinePhone /><p style={{marginLeft:'20px'}}>41 9 9812-4378</p></span>*/}
                        <span className='simple_text' style={{width:'100%', ...sty, justifyContent: 'flex-start', margin: '10px 0 10px 0'}}><AiOutlineMail /><p style={{marginLeft:'20px'}}>universomassagens@gmail.com</p></span>
                        <span className='simple_text' style={{width:'100%', ...sty, justifyContent: 'flex-start', margin: '10px 0 10px 0'}}><AiOutlineClockCircle /><p style={{marginLeft:'20px'}}>Segunda - Sexta 11:00 - 20:00 </p></span>
                    </div>
                    
                    <div id='c-formulario' style={{width:'60%', marginBottom: '60px'}}>
                        <Formulario />
                    </div>
                </div>
            </div>
        </div>
    );
}


const sty = {
    display:'flex', 
    alignItems:'center',
    justifyContent:'center'
}
