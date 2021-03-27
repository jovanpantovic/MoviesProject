import React, { Component } from "react";
import classes from "./Form.css";
//import axios from 'axios';
//import { Redirect } from 'react-router-dom';

const EMAIL = 'example@boopro.tech';
const PASSWORD = '123123';

class Form extends Component {
  state = {
    email: "",
    password: ""
  };
  
  submitHandler = (event) => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };
    
    if(this.state.email == EMAIL && this.state.password !== PASSWORD) {
            console.log('HTTP status code 401'); 
            alert('HTTP status code 401');
        } else if (this.state.email !== EMAIL) {
            console.log('HTTP status code 422');
            alert('HTTP status code 422');
        } else if (this.state.email == EMAIL && this.state.password == PASSWORD) {
            console.log('HTTP status code 200');
            window.localStorage.setItem('token', data);
            this.props.history.push('/movies');
        }

    /*axios
      .post("http://localhost:8000/login", data)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });*/
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className={classes.Form}>
        <input className={classes.Input} required
          type="text"
          placeholder="Email.."
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input className={classes.Input} required
          type="password"
          placeholder="Password.."
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button className={classes.Button}>SUBMIT</button>
      </form>
    );
  }
}

export default Form;
