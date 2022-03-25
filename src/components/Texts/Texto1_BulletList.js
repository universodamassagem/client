import React from 'react';

export default function Texto1_BulletList (props) {
    return (
        <div>
            {props.BLista.map((it, idx) => (
            <div key={idx} style={{display:'flex', marginBottom: '10px'}}>
                <p className='simple_text' style={{fontWeight: 900, margin: '0 0 0 10px'}}> • </p>
                <p className='simple_text' style={{fontWeight: 900, margin: '0 0 0 10px'}}> {it} </p>
            </div>
            ))}
        </div>
    );
}

/*

<div style={{display:'flex', marginBottom: '10px'}}>
                <p className='simple_text' style={{fontWeight: 900, margin: '0 0 0 10px'}}> • </p>
                <p className='simple_text' style={{fontWeight: 900, margin: '0 0 0 10px'}}>hjau h nh nhdunhacih</p>
            </div>
            <div style={{display:'flex', marginBottom: '10px'}}>
                <p className='simple_text' style={{fontWeight: 900, margin: '0 0 0 10px'}}> • </p>
                <p className='simple_text' style={{fontWeight: 900, margin: '0 0 0 10px'}}> c ahahjau h nh nhdunhacih</p>
            </div>
            <div style={{display:'flex', marginBottom: '10px'}}>
                <p className='simple_text' style={{fontWeight: 900, margin: '0 0 0 10px'}}> • </p>
                <p className='simple_text margin_b' style={{fontWeight: 900, margin: '0 0 0 10px'}}> cih dhnva nhdunhacih</p>
            </div>

*/