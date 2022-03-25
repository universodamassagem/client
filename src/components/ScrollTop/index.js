import React from "react";
import { MdKeyboardArrowUp } from 'react-icons/md';

import "./style.css";

export default function ScrollTop () {

    window.addEventListener('scroll', function() {
        let fixed = document.getElementById('backToTop');
        console.log(window.pageYOffset)
        if( window.pageYOffset > 40 ) {
            fixed.style.display = 'flex';
        } else {
            fixed.style.display = 'none';
        }
      });

      function handleTop () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
      }

    return (
        <div id="ScrollTop">
                <span id='backToTop' onClick={handleTop}><MdKeyboardArrowUp /></span>
        </div>
    );
}