import React from 'react';
import { hydrate } from 'react-dom';
import store from '../store/index';
import { Provider } from 'mobx-react'
import App from './components/App';

hydrate(
        <Provider {...store}>
        <App />
        </Provider>, 
        document.getElementById('root')
        );