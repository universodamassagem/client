import React from "react";
import "./style.css";

//import { home as txts } from '../../constants/txts'
import txts from '../../../constants/translation/pt_br/home_components/banner.json'

import gif from '../../../assets/room_dark.png';

export default function Banner () {

    return (
        <div id="Banner">
            <div className='banner_wrapper'>
                <div className='absolute_banner_background_matte'></div>
                <div className='small_video_wrapper'>
                    <div className='absolute_small_video_content'>
                        <aside className='small_video_content'>
                            <strong>{txts.title.toUpperCase()}</strong>
                            <p>{txts.content}</p>
                            <button><a href="/Sobre">{txts.button.toUpperCase()}</a></button>
                        </aside>
                    </div>
                    <figure >
                        <img id='room-video' src={gif}/>
                    </figure>
                </div>
            </div>
        </div>
    );
}