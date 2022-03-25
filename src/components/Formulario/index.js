import React from "react";

import "./style.css";

export default function Formulario (props) {

    let indentificador = (props.indentificador == 'Home') ? "Home":"Contato";

    function handleEmail () {

    }

    return (
        <div className={`Formulario Formulario--${indentificador}`}>
            <form onSubmit={handleEmail}>
                <div className='form_top_inputs'>
                    <label>
                        Nome:
                        <input placeholder="Nome Completo"></input>
                    </label>
                    <label>
                        E-mail:
                        <input placeholder="exemplo@email.com"></input>
                    </label>
                    <label>
                        Telefone:
                        <input placeholder="(00) 0 0000-000"></input>
                    </label>
                </div>
                <div className='form_botton_textArea'>
                <label>
                    Mensagem:
                    <textarea placeholder="Deixe uma mensagem..." type="text" name="form_mensagem" id='form_mensagem'/>
                </label>
                </div>
                <div className='form_button'>
                    <button> Enviar Mensagem </button>
                </div>
            </form>
        </div>
    );
}