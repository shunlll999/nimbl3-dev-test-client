import React, { Component } from 'react';
import { Link } from "react-router";

class App extends Component {
  render() {
    return (
      
      <div>
        <header role="banner" className="bs-docs-nav navbar navbar-default navbar-static-top" >
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand">Nimbl3-Test</a>
                        <button type="button" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar" ></span>
                        </button>
                    </div>
                    <div className="navbar-collapse bs-navbar-collapse">
                        <ul id="top" role="navigation" className="nav navbar-nav" >
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/register">Resgister</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            {this.props.children}
       
      </div>
    );
  }
}

export default App;
