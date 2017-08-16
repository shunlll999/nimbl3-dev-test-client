import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import Register from '../containers/Register';
import Login from '../containers/Login';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="home" name="home" component={Home}></Route>
            <Route path="register" name="register" component={Register}></Route>
            <Route path="login" name="login" component={Login}></Route>
        </Route>
    </Router>
);