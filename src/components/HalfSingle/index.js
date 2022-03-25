import React from "react";
import "./style.css";

//Conteudo de texto:
import txts from '../../constants/translation/pt_br/half_single.json'

export default function HalfSingle() {
    return (
        <div id="HalfSingle">
            <div className='half_wrapper_single'>
                <div className="half_content_single">
                    <div className={`half_text_area_single`}>
                        <strong>{txts.title}</strong>
                        <div><p>{txts.content}</p></div>
                        <button>{txts.button}</button>
                        <span></span>
                    </div>
                </div>
                <div className="half_image_single"></div>
            </div>
        </div>
    );
}