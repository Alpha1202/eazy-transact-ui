import React, { Component, createRef } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from '@reach/router';
import './index.css';

@inject('transactionStore')
@observer
class Header extends Component {
    state = {
        searchInput: ''
    }

    formRef = createRef()

    changeValueHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      onSearch = (event) => {
          if(event.key === 'Enter'){
          event.preventDefault();
          console.log(this.state.searchInput)
          }
      }

    render() {
    return (
       <header>
           <div className="search-area">
            <i className="fa fa-search" aria-hidden="true"></i> 
               <input 
               type="text" 
               name="searchInput" 
               value={this.state.searchInput} 
               placeholder="search Transaction" 
               onChange={this.changeValueHandler}
               onKeyPress={this.onSearch}
               />
           </div>
           <div className="user-area">
              <Link to="#" className="notification">
                  <i className="fa fa-bell" aria-hidden="true"></i>
                  <span className="circle">3</span>
              </Link>
              <Link to="#">
                  <div className="user-img"></div>
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
           </div>
       </header>
    )
    }
}

export default Header;