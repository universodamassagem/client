import React, { useState } from "react";

import "./style.css";

export default function Formulario(props) {

    let indentificador = (props.indentificador == 'Home') ? "Home" : "Contato";

    const [name, setName]=useState('');
    //const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [message, setMessage]=useState('');

    function handleEmail(e) {
        e.preventDefault();
        window.open(`mailto:susianemonteny@gmail.com?subject=Contato%20-%20Universo%20da%20Massagem&body=Nome:%20${name}%0D%0A%0D%0ATelefone:%20${phone}%0D%0A%0D%0A${message.replace(' ', '%20').replace(/\n|\r\n|\r/g, "%0D%0A")}`);
    }

    return (
        <div className={`Formulario Formulario--${indentificador}`}>
            <form onSubmit={handleEmail}>
                <div className='form_top_inputs'>
                    <label>
                        Nome:
                        <input
                         placeholder="Nome Completo"
                         value={name}
                         onChange={(e)=>setName(e.target.value)}
                         
                         />
                    </label>
                    {/*
                    <label>
                        E-mail:
                        <input
                         placeholder="exemplo@email.com"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         />
                    </label>
                    */}
                    <label>
                        Telefone:
                        <input
                         placeholder="(00) 0 0000-000"
                         value={phone}
                         onChange={(e)=>setPhone(e.target.value)}
                         />
                    </label>
                </div>
                <div className='form_botton_textArea'>
                    <label>
                        Mensagem:
                        <textarea 
                         value={message}
                         onChange={(e)=>setMessage(e.target.value)}
                        placeholder="Deixe uma mensagem..." 
                        type="text" name="form_mensagem" 
                        id='form_mensagem' 
                        />
                    </label>
                </div>
                <div
                    onClick={handleEmail}
                    className='form_button'
                >
                    <button> Enviar Mensagem </button>
                </div>
            </form>
        </div>
    );
}