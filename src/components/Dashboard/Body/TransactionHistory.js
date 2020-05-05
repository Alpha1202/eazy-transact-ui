import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("transactionStore")
@observer
class TransactionHistory extends Component {

  componentDidMount(){
    this.props.transactionStore.getTransactionLog()
  }


  render() {
    const { transactionLog } = this.props.transactionStore

    return (
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Send To</th>
            <th>Received From</th>
          </tr>
        </thead>
       {
        transactionLog.map((transaction) => {
          const {
            id,
            transactionType,
            createdAt,
            amount,
            sentTo,
            receivedFrom
          } = transaction
          
          return (
           
            <tbody key={id}>
            <tr>
              <td>
                <span className={transactionType == "CREDIT" ? 'logo' : 'debit'}>{transactionType == 'CREDIT' ? 'CR' : 'DB'}</span>{transactionType}
              </td>
              <td>{createdAt}</td>
              <td>{amount}</td>
          <td>{sentTo}</td>
              <td>{receivedFrom}</td>
            </tr>
          </tbody>
       
          )
        })
      }
      
       
      </table>
    );
  }
}

export default TransactionHistory;
