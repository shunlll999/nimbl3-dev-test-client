import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return(
            <div className="container">
                <div className="starter-template">
                    <h1>Hello my nimbl3 developer test</h1>
                    <p className="lead">Development add reminder application for developer test.<br/> Sample text type here!!!</p>

                    <div className="App">
                        <div className="title">
                            Task of {'WACH'}
                        </div>
                        <div className="form-inline">
                            <div className="form-group reminder-form">
                                <input 
                                    className="form-control"
                                    placeholder="Task"
                                />
                            </div>
                            <button
                                className="btn btn-success"
                                type="button"
                            >
                                Add Todo
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}