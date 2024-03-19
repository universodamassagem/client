import React from 'react'
import a_plus_h from "../../assets/a_plus_h.png"
import './styles.css'
import send from '../../functions/send-whatsapp'

function Aplus() {
    return (
        <div style={{ padding: '200px 0', backgroundColor: '#312f2e', color: 'white' }} className='center half_text_area' >
            <strong style={{ marginBottom: '10px' }}>
                Você, massagista ou esteticista
            </strong>
            <p
                className='half_text_area'
                style={{ marginBottom: '60px', maxWidth: '88vw' }}
            >
                Já pensou em expandir sua clientela e aumentar sua presença online? Se sim, você está no lugar certo!
            </p>
            <p
                style={{
                    marginBottom: '20px',
                    width: '691px',
                    maxWidth: '86vw',
                    textAlign: 'justify',
                    fontSize: '14px'

                }}
            >
                Não perca tempo! Aproveite essa oportunidade para destacar seu talento e conquistar mais clientes. Entre em contato pelo WhatsApp e descubra como podemos ajudá-lo.
            </p>
            <div onClick={()=> send('Olá, gostaria de anúnciar maus serviços.')}>
                <img
                    className='a_plus_img'
                    src={a_plus_h}
                />
            </div >
        </div>
    )
}

export default Aplus