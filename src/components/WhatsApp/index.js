import React, {useState} from "react";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import send from "../../functions/send-whatsapp";
import "./style.css";

export default function WhatsApp () {
    return (
        <div id="WhatsApp">
                <span id='whatsapp' onClick={send}><AiOutlineWhatsApp /></span>
                <span id='whtasapp_msg'> Agende via WhatsApp</span>
                
                {/* <div id='mini_whatsapp'>
                    <div id='miniW_header'>
                        <span></span>
                    </div>
                    <div id='miniW_bubble'></div>
                    <div id='miniW_msg'>
                        <form>
                            <textarea
                                onChange={ e => setWMsg(e.target.value)}
                            ></textarea>
                        </form>
                        <button onClick={send}></button>
                    </div>
                </div> */}
        </div>
    );
}