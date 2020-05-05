import React, { Component, createRef } from 'react'
import { inject, observer } from 'mobx-react';
import Icon from "../../../static/svg/transfer.svg";

@inject('transactionStore')
@observer
class OTPModal extends Component {
    state = {
        token: ''
    }

    formRef = createRef()

    changeValueHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }

    onSubmit = (event) => {
      
        event.preventDefault();
        const payload = {
          token: this.state.token,
        };
        
        this.props.transactionStore.transfer(payload);
      }
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Transfer</div>
            <div className="content">
              <div className="image">
                <img src={Icon} alt="" />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="token">OTP</label>
                  <input type="text" name="token" placeholder="enter OTP" onChange={this.changeValueHandler} />
                </div>
       
              </div>
            </div>
          
            <div className="footer">
              <button type="submit" value="Transfer" className="btn" onClick={this.onSubmit}>
                {this.props.transactionStore.isFetching ? 'Loading...' : 'Send'}
                </button>
            </div>
          </div>
        )
    }
}

export default OTPModal; 
