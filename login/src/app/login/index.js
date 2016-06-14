require('./index.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import Container from './parts/container.js';


ReactDOM.render(
    (<Container />), document.querySelector('#ddd')
);