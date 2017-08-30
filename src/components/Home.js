import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddReminder, DeleteReminder, ClearReminder } from '../actions';

class Home extends Component{

    constructor(props){
      super(props);
      this.state = {
        text:''
      }
    }

    addReminder(){
      this.props.AddReminder(this.state.text);
    }

    deleteReminder(id){
      this.props.DeleteReminder(id);
    }

    renderReminder(){
      let { reminders } = this.props
      return(
        <ul className="list-group col-sm-4">
          {
            reminders.map( reminder => {
              return (
                <li key={reminder.id} className="list-group-item">
                  <div className="list-item">
                    {reminder.text}
                  </div>
                  <div
                    className="list-item delete-button"
                    onClick={()=>this.deleteReminder(reminder.id)}
                  >&#x2715;</div>
                </li>
              )
            })
          }
        </ul>
      )
    }

    render(){
        return(
            <div className="container">
                <div className="starter-template">
                    <h1>Hello my nimbl3 developer test</h1>
                    <p className="lead">Development add reminder application for developer test.<br/> Sample text type here!!!</p>
                    -------------------------------
                </div>
                <div className="App">
                    <div className="title">
                        Task of {'WACH'}
                    </div>
                    <div className="form-inline reminder-form">
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Task"
                                onChange={event => this.setState({text:event.target.value})}
                            />
                        </div>
                        <div className="add-btn">
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={()=>this.addReminder()}
                        >
                            Add Todo
                        </button>
                        </div>
                    </div>
                      {this.renderReminder()}
                      <div className="danger-b">
                      <button
                          className="btn btn-danger"
                          type="button"
                          onClick={()=>this.props.ClearReminder()}
                      >
                          Clear
                      </button>
                      </div>
                </div>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    AddReminder,
    DeleteReminder,
    ClearReminder
  },dispatch);
}

function mapStatetoProps(state){
  return {
    reminders:state
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
