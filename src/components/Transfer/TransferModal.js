import React, { Component, createRef } from 'react'
import { inject, observer } from 'mobx-react';
import Icon from "../../../static/svg/transfer.svg";

@inject('transactionStore')
@observer
 class TransferModal extends Component {
    state = {
        amount: '',
        transferTo: '',
        pin: ''
      }
       
      formRef = createRef()
    
      changeValueHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        const payload = {
          amount: this.state.amount,
          transferTo: this.state.transferTo,
          pin: this.state.pin
        };
    
        this.props.transactionStore.initiateTransfer(payload);
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
                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" placeholder="enter amount" onChange={this.changeValueHandler} />
              </div>
              <div className="form-group">
                <label htmlFor="transferTo">Receiver Email</label>
                <input type="text" name="transferTo" placeholder="Enter receiver's email" onChange={this.changeValueHandler}/>
              </div>
              <div className="form-group">
                <label htmlFor="pin">Pin</label>
                <input type="text" name="pin" placeholder="Enter your Pin" onChange={this.changeValueHandler}/>
              </div>
     
            </div>
          </div>
        
          <div className="footer">
            <button type="submit" value="Transfer" className="btn" onClick={this.onSubmit}>
            {this.props.transactionStore.isFetching ? 'Loading...' : 'Transfer'}
              </button>
          </div>
          
        </div> 
        )
    }
}

export default TransferModal;