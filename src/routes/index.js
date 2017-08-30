import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from '../components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from '../reducers';
import '../css/starter.css';

const middleware = applyMiddleware(promise(),thunk,logger);
const store = createStore(reducer,middleware);

export default (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);
