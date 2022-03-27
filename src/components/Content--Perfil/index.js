import React from "react";
import "./style.css";

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ImWhatsapp } from 'react-icons/im'
import { FiAtSign } from 'react-icons/fi'

import txts from '../../constants/translation/pt_br/home_components/h_massagistas.json'

//TMP imagens:
import avatar from "../../assets/tmp_mon/avatar.jpg"
import i1 from "../../assets/tmp_mon/i1.jpg"
import i2 from "../../assets/tmp_mon/i2.jpg"
import i3 from "../../assets/tmp_mon/i3.jpg"

const L = [
    {
        title: 'Massagens',
        list: [
            'Relaxamento',
            'Terapêutica',
            'Pedras Quentes',
            'Desportiva',
            'Shiatsu',
            'Reflexologia',
            'Hidratação Fácial',
            'Detox',
            'Esfoliante Corporal'
        ]
    },


    {
        title: 'Atendimento',
        list: [
            'Centro de Lisboa',
        ]
    },

    {
        title: 'Horário',
        list: [
            'Segunda a Sexta - 11h30 às 19h00',
        ]
    }

    /*{
        title: 'Observações',
        list: [
            'Caso o propósito não seja a massagem, agradecemos que não nos contacte. Não dispomos de qualquer tipo de complemento sexual ou convívio!',
        ]
    },*/
]

export default function PerfilContent () {

    return (
        <div id="PerfilContent" style={{...sty, flexDirection: 'column'}}>
             <div id='perfil-wrapper' style={{width:'80%',  ...sty, flexDirection:'column'}}>
                <div id='avatar'>
                    <img src={avatar}/>
                </div>
                <div className="name-margin">
                    <h2 id='name' style={{fontSize: '36px'}}>{txts.massagistas[0].name}</h2>
                </div>
                <p id='descricao'>{txts.massagistas[0].desc}</p>
            </div>
            <Desc />
            <span id='fotos-title'><p>Imagens</p></span>
            <div id='fotos'>
                <div>
                    <img src={i1}/>
                </div>
                <div>
                    <img src={i2}/>
                </div>
                <div>
                    <img src={i3}/>
                </div>
            </div>
        </div>
    );
}


const sty = {
    display:'flex', 
    alignItems:'center',
    justifyContent:'center'
}

const Desc = () => {
    return (
        <div id='Desc'>
            <div className='desc-top-full-border'>
                <div className='desc-top'>
                    <span className='desc-icon desc-icon--red'><HiOutlineLocationMarker /></span>
                    <h2 id='name'>{txts.massagistas[0].city}</h2>
                </div>
            </div>
            <div className='desc-bot'>
                <div className='desc-bot--left'>
                    <div id='hightlights'>
                        <div className="number-w">
                            <span className='desc-icon desc-icon--white'><ImWhatsapp /></span>
                            <span id="number">{txts.massagistas[0].number}</span>
                        </div>
                        <div className="number-w">
                            <span className='desc-icon desc-icon--white'><FiAtSign /></span>
                            <span id="number">{txts.massagistas[0].email}</span>
                        </div>
                    </div>
                    <DList attr={L[0]}/>
                    <DList attr={L[1]}/>
                </div>
                <div className='desc-bot--right'>
                    <DList attr={L[2]}/>
                    {/*<DList attr={L[3]}/>*/}
                </div>
            </div>
        </div>
    )
}

const DList = ({attr}) => {
    return (
        <div id='DList'>
            <dl>
                <dt>{`${attr.title}:`}</dt>
                {attr.list.map((it, idx)=>(
                    <dd key={idx}>{`• ${it}`}</dd>
                ))}
            </dl>
        </div>
    )
}