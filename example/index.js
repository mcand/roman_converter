import React from 'react';
import ReactDOM from 'react-dom';
import Translator from '../src/Translator';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Translator />, container);