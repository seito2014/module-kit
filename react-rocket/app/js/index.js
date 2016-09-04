'use strict';

import $ from 'jquery';
window.$ = window.jQuery = $;

import fit from './module/_fit';
fit();

//React
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './module/_button';

ReactDOM.render(<Button className="button" />, document.getElementById('app'));