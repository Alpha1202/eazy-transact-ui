import axios from 'axios';
import { action, observable } from 'mobx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiRoot } from './apiRoot';

class authStore {

    @observable error = null
    @observable isFetching = false
    @observable authUser = {}
    @observable message = ''
    @observable redirect = false

    @action loginUser(userData) {
        
      this.isFetching = true
      
      return axios.post(`${apiRoot}/user/signin`, userData)
        .then((res) => {

          const { details, message, token } = res.data; 
          this.authUser = details
          this.redirect = true
         
          localStorage.setItem('token', token);
          toast.success(message, {
            position: toast.POSITION.TOP_CENTER
          })
          this.isFetching = false
        })
        
      .catch((error) => {
        let { message } = error.response.data;
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER
        })
      
        this.isFetching = false
      }
      )
    }

    @action logout() {
         
      this.redirect = false
      this.isFetching = false
      
    }

    @action signUp(userData) {

      this.isFetching = true

      return axios.post(`${apiRoot}/user/signup`, userData)
        .then((res) => {
         
          const { details, message, token } = res.data; 
          this.authUser = details
          this.redirect = true
          
          localStorage.setItem('token', token);
          toast.success(message, {
            position: toast.POSITION.TOP_CENTER
          })
          this.isFetching = false
        })
        
      .catch((error) => {
       console.dir(error)
        let { message } = error.response.data;
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER
        })
        this.isFetching = false
      }
      )
    }

    @action getAuthUserProfile() {

      const token = localStorage.getItem('token')

      return axios.get(`${apiRoot}/user/getuser`, {
        headers: {
          'Content-Type': 'application/json',
                token
        }
      })
      .then((res) => {
        const { details } = res.data; 
        this.authUser = details
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    }
  }

  export default new authStore();