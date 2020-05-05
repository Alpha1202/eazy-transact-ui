import React, { createRef } from "react";
import { Redirect } from '@reach/router';
import { inject, observer } from 'mobx-react';
import loginImg from "../../../static/svg/login.svg";
import './index.css';

@inject('authStore')
@observer
class Login extends React.Component { 
 
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  }

  formRef = createRef()

  changeValueHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    // if(!this.state.emailError) {
    // this.setState({ emailError:  'Email is required'})
    // return;
    // }

    // if(!this.state.passwordError) {
    //   this.setState({ passwordError: 'Password is required'})
    //   return;
    // }

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    
    this.props.authStore.loginUser(userData);
  }
  render() {
    
    return (
      
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className={this.state.emailError != '' ? 'danger' : ''} placeholder={this.state.emailError != '' ? `${this.state.emailError}` : 'email'} onChange={this.changeValueHandler} required/>
 
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className={this.state.passwordError != '' ? 'danger' : ''} placeholder={this.state.passwordError != '' ? `${this.state.passwordError}` : "password"} onChange={this.changeValueHandler} required/>
            </div>
   
          </div>
        </div>
      
        <div className="footer">
          <button type="submit" value="Login" className="btn" onClick={this.onSubmit}>
            {this.props.authStore.isFetching ? 'Loading...' : 'Login'}
            </button>
        </div>
        {this.props.authStore.redirect && <Redirect to="/user" />}
      </div>
    
    );
  }
}

export default Login;