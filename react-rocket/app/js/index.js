'use strict';

import $ from 'jquery';
window.$ = window.jQuery = $;

import fit from './module/_fit';
fit();

//React
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './module/_button';

let windowElm = document.getElementsByClassName('window');
let windowElmLength = windowElm.length;

function renderElm(elm){
    for(let i = 0; i < windowElmLength - 1; i++){
        let targetName = 'target="#js-area-' + i + '"';
        ReactDOM.render(<Button className="button" />, elm[i]);
    }
}
renderElm(document.getElementsByClassName('js-button'));