import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';

export default class Main extends Component{
    
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </Switch>
            </main>
        );
    }
}
