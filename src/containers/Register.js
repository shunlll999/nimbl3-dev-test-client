import React, { Component, Protypes } from 'react';
import $ from "jquery";

export default class Register extends Component {
    static Protypes = {};

    constructor(props, context) {
        super(props, context);
        this.state = { 
            email: '',
            password: '',
            password2: ''
        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.CreateUserDone = this.CreateUserDone.bind(this);
        this.CreateUserFail = this.CreateUserFail.bind(this);
    }

    handleChange(event) {
        switch( event.target.id ){

            case "inputEmail":
                this.setState({email: event.target.value});
            break;

            case "inputPassword":
                this.setState({password: event.target.value});
            break;

            case "inputPassword2":
                this.setState({password2: event.target.value});
            break;

        }
    }

    handleSubmit(event) {

        if( this.state.password !== this.state.password2 ){
            alert('your password it\'s dosen\'t match, get back to check your password!!');
        }else{

            let userData = {
                username:this.state.email,
                password:this.state.password
            }
            $.post("http://localhost:3003/api/users/",userData).done(this.CreateUserDone).fail(this.CreateUserFail);

        }

        event.preventDefault();
    }

    CreateUserDone(){
        console.log('creare user is success!');
        this.context.router.push('/login');
    }

    CreateUserFail(error){
        alert( error );
    }

    render(){

        return(
            <div className="bs-docs-section">
                <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Please enter your information</h2>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" data-cip-id="inputEmail" onChange={this.handleChange} autocomplete="off"/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={this.handleChange} data-cip-id="inputPassword"/>
                    <label for="inputPassword2" className="sr-only">Password</label>
                    <input type="password" id="inputPassword2" className="form-control" placeholder="Confirm Password" required="" onChange={this.handleChange} data-cip-id="inputPassword2"/>
                    <br/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </form>
                </div>
               
            </div>

            
        );

        
    }
}


Register.contextTypes = {
    router: React.PropTypes.object
}
