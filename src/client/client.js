// Startup point for the client side application
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

ReactDom.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    , document.querySelector('#root'));