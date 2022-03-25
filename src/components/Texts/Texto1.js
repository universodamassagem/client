import React from 'react';

export default function Texto1 (props) {
    return (
        <div>
            <div className='column_all' style={{margin:'30px 0 10px 0'}}>
                        <div style={{width:'100%', marginBottom:'10px'}}>
                        <strong className='simple_titulo' style={{margin:'30px 0 30px 0', fontSize:'1.2em', fontWeight: 300}}> {props.titulo}</strong>
                        </div>
                        <p className='simple_text' style={{lineHeight: '1.6', fontSize: '1.06em'}}>{props.conteudo}</p>
                    </div>
        </div>
    );
}