import React, { Component, Protypes } from 'react';
import $ from "jquery";

export default class Login extends Component {
    static Protypes = {};

    constructor(props, context) {
        super(props, context);
        this.state = { 
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch( event.target.id ){

            case "inputEmail":
                this.setState({email: event.target.value});
            break;

            case "inputPassword":
                this.setState({password: event.target.value});
            break;

        }
    }

    handleSubmit(event) {
        if( this.state.password !== '' ||  this.state.email !== ''){
            let userData = {
                username:this.state.email,
                password:this.state.password
            }
            $.post("http://localhost:3003/api/auth/token",userData).done(this.AuthUserDone).fail(this.AuthUserFail);
        }else{
            alert('please enter complete your email and password');
        }
        event.preventDefault();
    }

    AuthUserDone(data){
        console.log('login success!');
        console.log(data);
        this.context.router.push('/home');
    }

    AuthUserDone(){
        alert('login error');
        alert('please enter complete your email and password');
    }

    render(){
        return(
            <div className="bs-docs-section">
                <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" data-cip-id="inputEmail" onChange={this.handleChange} autocomplete="off"/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={this.handleChange} data-cip-id="inputPassword"/>
                    <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
                </div>
                
            </div>
        );

        
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
}