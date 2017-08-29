import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from '../components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import '../css/starter.css';

const store = createStore(reducer);

export default (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);