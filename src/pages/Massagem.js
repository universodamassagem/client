import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import SmallB from "../components/SmallBanner";
import EntreEmContato from "../components/HomeComponents/EntreEmContato"

import Texto1 from '../components/Texts/Texto1'

import txts from '../constants/translation/pt_br/pages_/massagem.json'

export default function Massagem() {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container" >
            <div id='TOP-MARGIN-TO-FIXED-HEADER' style={{ display: 'none', width: '120px', height: '64px' }}></div>
            <WhatsApp />
            <ScrollTop />
            <Header />
            <SmallB
                titulo="m"
                conteudo={txts.title.toUpperCase()}
            />
            <div className='wrap_all'>
                <div className='center_all'>

                    {/* OL: */}
                    <div className='column_all'>
                        <strong className='simple_titulo center' style={{ margin: '30px 0 30px 0', fontSize: '2.3em', fontWeight: 300 }}> Bem Estar</strong>
                    </div>


                    <Texto1
                        conteudo={txts.text1.content}
                        titulo={txts.text1.title}
                    />

                    <div style={{ height: '50px' }} />

                    <BulletList
                        content={txts.bullet_list}
                    />

                    <Texto1
                        conteudo={txts.more_text}
                        titulo={''}
                    />

                    <div style={{ height: '50px' }} />

                    <NumericList
                        list={txts.numeric_list}
                    />

                    <Texto1
                        conteudo={txts.more_text2}
                        titulo={''}
                    />

                </div>

            </div>

            <div style={{ height: '80px' }} />

            <EntreEmContato size='big' />

            <Footer />
        </div>
    );
}

const BulletList = ({ content }) => {

    console.log(content, typeof content, content.length)

    return (
        <div>
            {/* Bullet List: */}
            <div className='column_all' style={{ margin: '30px 0 10px 0' }}>
                <div style={{ width: '100%' }}>
                    <strong className='simple_titulo' style={{ margin: '30px 0 30px 0', fontSize: '1.2em', fontWeight: 300 }}>Massagens</strong>
                </div>
            </div>

            {
                content.map((it, id) =>
                    <div style={{ display: 'flex' }}>
                        <p className='simple_text'> • </p>
                        <p className='simple_text' style={{ marginLeft: '10px', lineHeight: 1.8 }}>
                            <strong>{it.strong}</strong>
                            {' ' + it.text}
                        </p>
                    </div>

                )
            }

        </div>
    )
}

const NumericList = ({ list }) => {
    return (
        <>
            <div className='column_all' style={{ margin: '30px 0 10px 0' }}>
                <div style={{ width: '100%' }}>
                    <strong className='simple_titulo' style={{ margin: '30px 0 30px 0', fontSize: '1.2em', fontWeight: 300 }}>Mais massagens</strong>
                </div>
            </div>
            {
                list.map((it, idx) =>
                    <div style={{ display: 'flex' }}>
                        <p className='simple_text' style={{ fontSize: '1.2em' }}> {`0${idx + 1}.`} </p>
                        <p className='simple_text' style={{ marginLeft: '10px', fontSize: '1.2em', lineHeight: 1.8 }}>
                            <strong>{it.strong}</strong>
                            {' ' + it.text}
                        </p>
                    </div>

                )
            }
        </>
    )
}