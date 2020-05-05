import React, { Component } from 'react';
import { Redirect } from '@reach/router';
import { inject, observer } from 'mobx-react';
import OTPModal from './OTPModal';
import TransferModal from './TransferModal';
import './index.css';

@inject('transactionStore')
@observer
class Index extends Component {
    
    render() {
        const { redirect, completed } =  this.props.transactionStore;
        
        if(!redirect) return (<TransferModal />)
        else if(redirect && !completed) return (<OTPModal />)
        else return (<Redirect to='/user' />);
         
    }
}

export default Index;