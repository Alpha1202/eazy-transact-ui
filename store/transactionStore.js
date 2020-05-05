import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { action, computed, observable } from 'mobx';
import { apiRoot } from './apiRoot';



class transactionStore {

    @observable error = null
    @observable isFetching = false
    @observable transaction = {}
    @observable message = ''
    @observable redirect = false
    @observable creditRedirect = false
    @observable completed = false
    @observable recentTransaction = {
        amount: '',
        createdAt: '',
        transactionType: ''
    }
    @observable transactionLog = []

    @action initiateTransfer(payload) {

        this.isFetching = true
        this.error = null
        const token = localStorage.getItem('token')
        return axios.post(`${apiRoot}/transaction/send`, payload, {
          
            headers: {
                'Content-Type': 'application/json',
                token
              }
        })
        .then((res) => {
            console.log(res.data)
            const { message } = res.data
            this.isFetching = false
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
              })
            this.redirect = true
        
        })
        .catch((err) => {
            let { error } = err.response.data;
            this.isFetching = false
            if(error){
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
              })
            } else {
                toast.error('Something went wrong', {
                    position: toast.POSITION.TOP_CENTER
                  })
            }
            
        })
    }

    @action transfer(payload){
        
        this.isFetching = true
        this.error = null
        const token = localStorage.getItem('token')
        
        return axios.post(`${apiRoot}/transaction/transfer`, payload, {
            
            headers: {
                'Content-Type': 'application/json',
                token
              }
        })
        .then((res) => {
            const { message } = res.data
            this.isFetching = false
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
              })
            this.redirect = true
            this.completed = true
            
        })
        .catch((err) => {
            const { error } = err.response.data;
            this.isFetching = false
            if(error){
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
              })
            } else {
                toast.error('Something went wrong', {
                    position: toast.POSITION.TOP_CENTER
                  })
            }
            console.log(error.response.data);
        })
    }

    @action getMostRecentTransfer(){

        const token = localStorage.getItem('token')

        return axios.get(`${apiRoot}/transaction/recenttransaction`, {
            
            headers: {
                'Content-Type': 'application/json',
                token
              }
        })
        .then((res) => {
            
            const { recentTransaction } = res.data; 
                
            this.recentTransaction.amount = recentTransaction[0].amount || '';
            this.recentTransaction.createdAt = recentTransaction[0].createdAt || '';
            this.recentTransaction.transactionType = recentTransaction[0].transactionType || '';
            
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    @action getTransactionLog(){

        const token = localStorage.getItem('token')

        return axios.get(`${apiRoot}/transaction/transactionlog`, {
            
            headers: {
                'Content-Type': 'application/json',
                token
              }
        })
        .then((res) => {
          
            const { userTransactions } = res.data; 
            console.log(userTransactions, 'user here')
            this.transactionLog = userTransactions;
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    @action credit(payload){

        this.isFetching = true
        const token = localStorage.getItem('token')

        return axios.post(`${apiRoot}/transaction/credit`, payload, {
          
            headers: {
                'Content-Type': 'application/json',
                token
              }
        })
        .then((res) => {
            console.log(res.data)
            const { message } = res.data
            this.isFetching = false
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
              })
            this.creditRedirect = true
            
           console.log(res.data)
        })
        .catch((err) => {
            let { error } = err.response.data;
            this.isFetching = false
            if(error){
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
              })
            } else {
                toast.error('Something went wrong', {
                    position: toast.POSITION.TOP_CENTER
                  })
            }
            console.log(error.response.data);
        })
    }
}

export default new transactionStore();