import React, { Component, createRef } from 'react';
import { Redirect } from '@reach/router';
import { inject, observer } from 'mobx-react';
import Icon from "../../../static/svg/credit.svg";
import './index.css';

@inject('transactionStore')
@observer
class CreditModal extends Component {
    state = {
        amount: ''
      }
       
      formRef = createRef()
    
      changeValueHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        const payload = {
          amount: this.state.amount
        };
    
        this.props.transactionStore.credit(payload);
      }
    render() {
      const { creditRedirect } =  this.props.transactionStore;

        return (
          creditRedirect ? (
            <Redirect to='/user' />
          )
        :
      (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Credit</div>
        <div className="content">
          <div className="image">
            <img src={Icon} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="text" name="amount" placeholder="enter credit amount" onChange={this.changeValueHandler} />
            </div>
          </div>
        </div>
      
        <div className="footer">
          <button type="submit" value="Credit" className="btn" onClick={this.onSubmit}>
          {this.props.transactionStore.isFetching ? 'Loading...' : 'Credit'}
            </button>
        </div>
        
      </div> 
      )
           
        )
    }
}

export default CreditModal;