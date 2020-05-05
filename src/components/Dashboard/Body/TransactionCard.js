import React, { Component } from 'react'
import { inject, observer } from "mobx-react";

@inject("transactionStore")
@observer
 class TransactionCard extends Component {

  componentDidMount(){
    this.props.transactionStore.getMostRecentTransfer()
  }
    render() {
     
      const {
        amount,
        createdAt,
        transactionType
      } = this.props.transactionStore.recentTransaction;
      
 
        return (
            <div className="col-md-6">
            <div className="user-card">
              <h6>Most Recent Transaction</h6>
              <span className="date">{transactionType}</span>
              <div className="de-col-md-2">
        <span className={transactionType == "CREDIT" ? 'credit' : 'debit'}>{transactionType == 'CREDIT' ? 'CR' : 'DB'}</span>
              </div>
              <div className="de-col-md-10">
                <span className="location">Amount: {amount}</span>
                <span className="position">Date: {createdAt}</span>
                <span className="time">Time: {createdAt}</span>
              </div>
            </div>
          </div>
        )
    
  }
}

export default TransactionCard;