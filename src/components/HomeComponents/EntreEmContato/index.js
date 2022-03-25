import React, {useState, useEffect} from "react";
import "./style.css";

import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

import RedButton from "../../RedButton";

import send from "../../../functions/send-whatsapp";

import txts from '../../../constants/translation/pt_br/home_components/entre_em_contato.json'

export default function EntreEmContato (props) {

    const [ widthSize, setWidthSize ] = useState(
        window.outerWidth > 960
            ? props.size
            : 'big'
    );

    const [ list, setList ] = useState([])

    useEffect(() => {
        const start = txts.msg_com_destaque.indexOf('<')
        const end = txts.msg_com_destaque.indexOf('>')

        const localList = []
        localList.push(txts.msg_com_destaque.slice(0, start))
        localList.push(txts.msg_com_destaque.slice((start+1), end))
        localList.push(txts.msg_com_destaque.slice((end+1), txts.msg_com_destaque.length))

        setList(localList)
    }, [])

    window.addEventListener('resize', () => {
        setWidthSize( document.body.clientWidth > 960 ? props.size : 'big');
        console.log(document.body.clientWidth);
    });

    return (
        <div id="EntreEmContato">
            <div className={`eec_center eec_center--${widthSize}`}>
                <div className='eec_text'>
                    {widthSize === 'small' ? <h3>{txts.titulo}</h3> : <h2>{txts.titulo}</h2>}
                    <p>{list[0]}<strong>{list[1]}</strong>{list[2]}</p>
                </div>
                <div className='eec_buttons'>
                    
                        <RedButton size={widthSize}> 
                            <div onClick={send}>
                                WhatsApp
                                <span><AiOutlineWhatsApp /></span>
                            </div>
                        </RedButton>
                    
                        <RedButton size={widthSize}> 
                            <a href="/Contato">
                                E-Mail
                                <span><FiMail /></span>
                            </a>
                        </RedButton>
                    
                </div>
            </div>
            <span className={`eec_absolute eec_absolute--${widthSize}_left`}><span></span></span>
            <span className={`eec_absolute eec_absolute--${widthSize}_right`}><span></span></span>
            {/*<div className='eec_ws_absolute eec_ws_absolute--left'></div>
            <div className='eec_ws_absolute eec_ws_absolute--rigt'></div>*/}
        </div>
    );
}