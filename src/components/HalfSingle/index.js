import React from "react";
import "./style.css";

//Conteudo de texto:
import txts from '../../constants/translation/pt_br/half_single.json'

export default function HalfSingle({ title, content, button, hideButton }) {
    return (
        <div id="HalfSingle">
            <div className='half_wrapper_single'>
                <div className="half_content_single">
                    <div className={`half_text_area_single`}>
                        <strong>{title ? title : txts.title}</strong>
                        <div><p>{content ? content : txts.content}</p></div>
                        {!hideButton && <button>{button ? button : txts.button}</button>}
                        <span></span>

                    </div>
                </div>
                <div className="half_image_single"></div>
            </div>
        </div>
    );
}