import React from "react";
//import { IoIosRose} from 'react-icons/io';
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { RiFacebookLine } from 'react-icons/ri'

//Conteudo de texto:
import txts from '../../constants/translation/pt_br/footer.json'

import "./style.css";

//TMP image:
import logotype from "../../assets/tmp_logo/logotype_test_black.png"

export default function Footer () {

    return (
        <footer id="Footer">
            <div className='f f--logo'>
                <img style={{width: '120px'}}src={logotype} />
                
            </div>
            <div className='f f--contatos'>
                <strong className='conts conts--one'>{txts.rua}</strong>
                <strong className='conts conts--one'>{txts.codigopostal}</strong>
                <strong className='conts conts--two'> <a href={`mailto:${txts.email}`}></a>{txts.email}</strong>
                <strong className='conts conts--three'>{txts.celular}</strong>
            </div>
            <div className='f f--redes'>
                <a href={''}><span>
                    <FiInstagram />
                </span></a>  
                {/*<a href={''}><span><RiFacebookLine /></span></a>*/}
                {/*<a href={''}><span><FiTwitter /></span></a>*/}
            </div>
            <div className='f f--copyRight'>
                <p>© Universo da Massagem 2022 / Todos direitos reservados</p>
            </div>
        </footer>
    );
}