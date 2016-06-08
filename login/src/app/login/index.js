require('./index.css');
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import Container from './parts/container.js';


render(
    (<Container />), document.querySelector('body')
);