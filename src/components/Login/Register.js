import React, { createRef } from "react";
import { Redirect } from "@reach/router";
import { inject, observer } from "mobx-react";
import loginImg from "../../../static/svg/login.svg";
import "./index.css";

@inject("authStore")
@observer
class Register extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    pin: "",
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    phoneNumberError: "",
    passwordError: "",
    pinError: ""
  };

  formRef = createRef();

  changeValueHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    // if(!this.state.firstName) {
    //   this.setState({ firstnameError: "Enter First name" });
    //   return;
    // }

    // if (!this.state.lastName) {
    //   this.setState({ lastnameError: "Enter last name" });
    //   return;
    // }

    // if (!this.state.email) {
    //   this.setState({ emailError: "Email is required" });
    //   return;
    // }

    // if (!this.state.password) {
    //   this.setState({ passwordError: "Password is required" });
    //   return;
    // }

    // if (!this.state.phoneNumber) {
    //   this.setState({ phoneNumberError: "Please enter your phone number" });
    //   return;
    // }
    // if (!this.state.pin) {
    //   this.setState({ pinError: "Password is required" });
    //   return;
    // }

    const userData = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      pin: this.state.pin
    };
      
    this.props.authStore.signUp(userData);
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                className={this.state.firstnameError != '' ? "danger" : ''}
                placeholder={
                  this.state.firstnameError != ''
                    ? `${this.state.firstnameError}`
                    : "First Name"
                }
                onChange={this.changeValueHandler}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                className={this.state.lastnameError != '' ? "danger" : ''}
                placeholder={
                  this.state.lastnameError != ''
                    ? `${this.state.lastnameError}`
                    : "Last Name"
                }
                onChange={this.changeValueHandler}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className={this.state.emailError != '' ? "danger" : ''}
                placeholder={
                  this.state.emailError != ''
                    ? `${this.state.emailError}`
                    : "email"
                }
                onChange={this.changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Phone</label>
              <input
                type="tel"
                name="phoneNumber"
                className={this.state.phoneNumberError != '' ? "danger" : ''}
                placeholder={
                  this.state.phoneNumberError != ''
                    ? `${this.state.phoneNumberError}`
                    : "Phone Number"
                }
                onChange={this.changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className={this.state.passwordError != '' ? "danger" : ''}
                placeholder={
                  this.state.passwordError != ''
                    ? `${this.state.passwordError}`
                    : "Enter Your Password "
                }
                onChange={this.changeValueHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pin">Pin</label>
              <input
                type="text"
                name="pin"
                className={this.state.pinError != '' ? "danger" : ''}
                placeholder={
                  this.state.pinError != ''
                    ? `${this.state.pinError}`
                    : "Please choose a secret pin"
                }
                onChange={this.changeValueHandler}
                required
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            type="submit"
            value="Register"
            className="btn"
            onClick={this.onSubmit}
          >
            {this.props.authStore.isFetching ? "Loading..." : "Register"}
          </button>
        </div>
        {this.props.authStore.redirect && <Redirect to="/user" />}
      </div>
    );
  }
}

export default Register;
